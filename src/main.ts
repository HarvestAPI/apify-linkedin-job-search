// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/).
import { Actor } from 'apify';
import { config } from 'dotenv';
import { createLinkedinScraper } from '@harvestapi/scraper';
import crypto from 'crypto';

config();

// this is ESM project, and as such, it requires you to specify extensions in your relative imports
// read more about this here: https://nodejs.org/docs/latest-v18.x/api/esm.html#mandatory-file-extensions
// note that we need to use `.js` even when inside TS files
// import { router } from './routes.js';

// The init() call configures the Actor for its environment. It's recommended to start every Actor with an init().
await Actor.init();

interface Input {
  jobTitles?: string[];
  locations?: string[];
  geoIds?: string[];
  page?: number;
  maxItems?: number;
  company?: string[];
  sortBy?: string;
  workplaceType?: string[];
  employmentType?: string[];
  experienceLevel?: string[];
  industryIds?: string[];
  salary?: string[];
  under10Applicants?: boolean;
  easyApply?: boolean;
  postedLimit?: string;
}

// Structure of input is defined in input_schema.json
const input = await Actor.getInput<Input>();
if (!input) throw new Error('Input is missing!');
input.jobTitles = (input.jobTitles || []).filter((q) => q && !!q.trim());
input.locations = (input.locations || []).filter((l) => l && !!l.trim());

const { actorId, actorRunId, actorBuildId, userId, memoryMbytes } = Actor.getEnv();
const { actorMaxPaidDatasetItems } = Actor.getEnv();

const client = Actor.newClient();
const user = userId ? await client.user(userId).get() : null;

const scraper = createLinkedinScraper({
  apiKey: process.env.HARVESTAPI_TOKEN!,
  baseUrl: process.env.HARVESTAPI_URL || 'https://api.harvest-api.com',
  addHeaders: {
    'x-apify-userid': userId!,
    'x-apify-actor-id': actorId!,
    'x-apify-actor-run-id': actorRunId!,
    'x-apify-actor-build-id': actorBuildId!,
    'x-apify-memory-mbytes': String(memoryMbytes),
    'x-apify-actor-max-paid-dataset-items': String(actorMaxPaidDatasetItems) || '0',
    'x-apify-username': user?.username || '',
    'x-apify-user-is-paying': (user as Record<string, any> | null)?.isPaying,
  },
});

const query = {
  company: input.company,
  sortBy: input.sortBy,
  workplaceType: input.workplaceType,
  employmentType: input.employmentType,
  experienceLevel: input.experienceLevel,
  salary: input.salary,
  under10Applicants: input.under10Applicants,
  easyApply: input.easyApply,
  postedLimit: input.postedLimit,
  industryId: input.industryIds,
};

const locations: {
  location?: string;
  geoId?: string;
}[] = [
  ...(input.locations?.map((location) => ({ location })) || []),
  ...(input.geoIds?.map((geoId) => ({ geoId })) || []),
];

if (!locations.length) {
  locations.push({ geoId: '92000000' }); // Default to global search if no locations provided
}

const combinations: Record<string, string | string[] | undefined | boolean>[] = [];

for (const location of locations) {
  if (input.jobTitles.length) {
    for (const searchQuery of input.jobTitles) {
      combinations.push({ search: searchQuery, ...query, ...location });
    }
  } else {
    combinations.push({ ...query, ...location });
  }
}

const state: {
  itemsLeft: number;
  scrapedCounter: number;
} = {
  itemsLeft: actorMaxPaidDatasetItems || 1000000,
  scrapedCounter: 0,
};

if (!combinations.length) {
  console.error('No job titles or companies provided in the input. No data will be scraped.');
  await Actor.exit();
}

for (const combinationQuery of combinations) {
  let maxItems = input.maxItems || state.itemsLeft;
  if (maxItems > state.itemsLeft) {
    maxItems = state.itemsLeft;
  }
  let didChargeActorStart = false;

  console.info(`Scraping jobs for query ${JSON.stringify(combinationQuery)}...`);

  const sessionId = crypto.randomUUID();

  await scraper.scrapeJobs({
    query: {
      ...combinationQuery,
    },
    outputType: 'callback',
    onItemScraped: async ({ item, pagination }) => {
      console.info(`Scraped job ${item.id}`);
      state.itemsLeft -= 1;

      if (state.itemsLeft >= 0) {
        state.scrapedCounter += 1;
        const pushResult = await Actor.pushData(
          {
            ...item,
            query: combinationQuery,
            _meta: {
              pagination,
            },
          },
          'job',
        );
        if (pushResult?.eventChargeLimitReached) {
          await Actor.exit({
            statusMessage: 'max charge reached',
          });
        }
      }
    },
    onPageFetched: async () => {
      if (!didChargeActorStart) {
        didChargeActorStart = true;
        Actor.charge({ eventName: 'actor-start' });
      }
    },
    overrideConcurrency: 6,
    maxItems,
    sessionId,
    startPage: input.page || 1,
    addListingHeaders: {
      'x-sub-user': user?.username || '',
      'x-concurrency': user?.username ? '2' : '',
      'x-queue-size': '15',
      'x-request-timeout': '180',
    },
  });
}

// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit().
await Actor.exit();
