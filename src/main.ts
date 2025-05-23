// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/).
import { Actor } from 'apify';
import { config } from 'dotenv';
import { createLinkedinScraper } from '@harvestapi/scraper';

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
  salary?: string[];
  under10Applicants?: boolean;
  easyApply?: boolean;
  postedLimit?: string;
}

// Structure of input is defined in input_schema.json
const input = await Actor.getInput<Input>();
if (!input) throw new Error('Input is missing!');
input.jobTitles = (input.jobTitles || []).filter((q) => q && !!q.trim());
if (!input.jobTitles?.length)
  throw new Error('Search queries: at least one Job Title is required!');

const { actorId, actorRunId, actorBuildId, userId, memoryMbytes } = Actor.getEnv();
let { actorMaxPaidDatasetItems } = Actor.getEnv();

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
  },
});

if (!actorMaxPaidDatasetItems) {
  actorMaxPaidDatasetItems = 9999999999;
}

let maxItems = Number(input.maxItems) || actorMaxPaidDatasetItems || 9999999999;

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
};

const locations: {
  location?: string;
  geoId?: string;
}[] = [
  ...(input.locations?.map((location) => ({ location })) || []),
  ...(input.geoIds?.map((geoId) => ({ geoId })) || []),
];

let lastPromise: Promise<any> | undefined;

for (const searchQuery of input.jobTitles) {
  let queryCounter = 0;

  for (const location of locations) {
    if (actorMaxPaidDatasetItems && maxItems && maxItems > actorMaxPaidDatasetItems) {
      maxItems = actorMaxPaidDatasetItems;
    }
    let scrapedItems = 0;

    if (maxItems - queryCounter <= 0) {
      continue;
    }

    await scraper.scrapeJobs({
      query: {
        ...(query as any),
        search: searchQuery,
        ...location,
      },
      outputType: 'callback',
      onItemScraped: async ({ item }) => {
        console.info(`Scraped job ${item.id}`);
        scrapedItems++;
        queryCounter++;
        lastPromise = Actor.pushData(item);
      },
      overrideConcurrency: 6,
      maxItems: maxItems - queryCounter,
    });

    actorMaxPaidDatasetItems -= scrapedItems;
  }
}

if (lastPromise) {
  await lastPromise;
}
// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit().
await Actor.exit();
