## The most Advanced LinkedIn Job Search Bulk Scraper

Our powerful tool helps you search LinkedIn Jobs by job titles and filter by locations, companies, and many other parameters without compromising security or violating platform policies. Extract full job and company details. Use multiple job title and locations for mass scraping. The actor is designed to be fast, reliable, and easy to use.

### Key Benefits

- No cookies or account required: Access job data without sharing cookies or risking account restrictions
- Low pricing: $1 per 1k jobs.
- Fast response times deliver data in seconds 🚀 Extract 1,000 LinkedIn Jobs ~ 2 Minutes
- No caching, fresh data.
- Concurrency: each actor works scraping 6 jobs at a time.

## How It Works

- (required) List of job tiles. (e.g., `Software Engineer`, `Data Scientist`, `Product Manager`)
- (optional) List of locations where they currently live (e.g., `New York`, `San Francisco`, `London`). Please note that LinkedIn does not always understand your text queries. For example for "UK" query it will apply "Ukraine" location, so you should use "United Kingdom" in this case. Try this out first in the location filter input of LinkedIn search at `https://www.linkedin.com/search/results/people/?geoUrn=%5B%22103644278%22%5D` - we will use the first suggestion from the autocomplete popup when you type your location.
- (optionally) List of LinkedIn Company URLs or company names (e.g., `Google`, `Meta`, `Amazon`)
- (optionally) Sort by `relevance` or `date`
- (optionally) Filter by `workplaceType` (e.g., `Remote`, `Hybrid`, `On-site`)
- (optionally) Filter by `employmentType` (e.g., `Full-time`, `Part-time`, `Contract`)
- (optionally) Filter by `experienceLevel` (e.g., `Entry Level`, `Mid Level`, `Senior Level`)
- (optionally) Filter by `salary` (e.g., `100000-150000`)
- (optionally) Filter by `under10Applicants` (e.g., `true`, `false`)
- (optionally) Filter by `easyApply` (e.g., `true`, `false`)
- (optionally) Filter by `postedLimit` (e.g., `Past hout`, `Past 24 hours`, `Past Week`, `Past Month`)
- (optional) List of LinkedIn industry IDs (e.g., `4`, `5`, `6`). You can find the full list of IDs in the [LinkedIn Industries](https://github.com/HarvestAPI/linkedin-industry-codes-v2/blob/main/linkedin_industry_code_v2_all_eng_with_header.csv).

Other params (optionally):

- `maxItems` - Maximum number of jobs to scrape per each search query. If you set to 0, it will scrape all available pages or up to 40 pages per search query.

### Data You'll Receive

- Full job details: title, description text, description HTML, location, posted date, salary, benefits, employment type and more.
- Full company details: name, logo, employee count, industries, and more.
- Job stats: number of applicants, views.
- Job application URL: direct link to apply for the job.

### Output data

Here is the example job output of this actor:

```json
{
  "id": "4227647589",
  "title": "Associate Data Engineer",
  "linkedinUrl": "https://www.linkedin.com/jobs/view/4227647589/",
  "jobState": "LISTED",
  "postedDate": "2025-05-14T17:12:41.000Z",
  "descriptionText": "About the Company\nEast Daley Analytics is a fast-paced leading provider of North American energy infrastructure and commodity market insights, offering data-driven solutions to help clients navigate investment decisions, M&A transactions, and financial market opportunities.\n\nOur Mission\nWe are moving the market at East Daley. We are doing cool stuff, sitting with the biggest decision-makers in the sector. We love to win! And have fun. When you are on the East Daley Team, you have the opportunity to sit at the table and have a hand in creating your future. We work together with transparency, focus on results, innovation, and a play-to-win attitude.\nAbout the Role\nWe are seeking a results-driven, detail-oriented Associate Data Engineer to join a best-in-class team. The ideal candidate is an innovative problem solver who is self-motivated and proactive, showing extreme passion for organizing raw data into structured and consumable reports. S/he will have a relentless approach to translating data to drive unique market insights in order ultimately to help clients win. In this position, the Engineer will be able to create structure, in an unstructured and ever-changing environment, with a strong ability to challenge and be challenged in approaches, uses, and organization.\nThis position represents a rare opportunity to be part of the Core Data Team as a thought leader to build out the company’s data foundation, central to EDA’s strategy and market leadership. Their input and advisement of data sources, intake, processes, and implementation into production will be key to further scale product development and market insights for business stakeholders. The Associate Data Engineer will not only receive mentorship and leadership from the Lead Analyst but will also have unique exposure to C-Suite Executives and the long-term objectives of the business.\nThis is a full-time, exempt position, based in Greenwood Village, Colorado, and reports to the Lead Analyst of Data Technology.\nAbout the Job\nResponsibilities & Requirements\nWorking SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases. As well as advanced knowledge of Python, SSIS, and SSRS are required.Ingest, clean, normalize, and combine non-uniform, automated, and manual oil and gas fundamental data sources through scraping websites, PDFs, Excel-based models, vendor FTP feeds, and raw miscellaneous data filesEnsure that data is logically paired together in a database and collectively aggregated in a data warehouseGood understanding of building and designing API’sDevelop, construct, test, and maintain databases and data warehouse architecture that supports the requirements of business stakeholdersDevelop dataset processes for data modeling, mining, and production with scheduled deployments and releases in a predictable cadenceRecommend and implement ways to improve data reliability, efficiency, and quality within the data warehouse and for reportsDiscover opportunities for new data acquisitionRun queries to produce consumable data and useable reports via.csv and excel for business stakeholders, both on a real-time basis and in a cyclical fashionCreate data tools and interfaces for analytics and team members that assist in building and optimizing productsIntake Analyst adjustments to complex optimization models and calculations to data files and sources on an ongoing basis, feeding back into databases for reporting accuracy and system of recordsIdentify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, and re-designing infrastructure for greater scalabilityCommunicate with both technical and non-technical internal customers to scope business requirements and layout detailed project plans with key milestones and ownersDocument all data sources, methodologies, and processes as it relates to the formation and refinement of the database build-out and queries\nWe are using Predictive Index in our hiring practices, please use this link to take the two PI assessments. Both must be completed: \nhttps://assessment.predictiveindex.com/Qb7/f8eaa326-e9b5-4488-8a5e-eea66f99e659?type=candidateba\nQualifications/EducationA minimum of 2 years of experience in technology with a focus on architectural design and planning, data, BI, and/or data warehousing experienceAdvanced working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databasesExperience building and optimizing raw data pipelines, architectures, and data sets, with strong analytics skills related to working with unstructured data setsMachine learning experience and experience with big data infrastructureExperience performing root cause analysis on internal and external data and processes to answer specific business questionsProficiency in Microsoft Office SuiteSmall to high-growth company experience preferredBachelor’s degree in information systems, Computer Information Systems, Engineering, Mathematics or similar field preferredOil and Gas industry experience is a plusCo-Pilot and OpenAI understanding is a plus\nBenefitsMedical (with multiple plan options), Dental, and Vision Coverage with Company Contributions401K with a 3% Company MatchFlexible and Health Savings Account Options with Company ContributionsLife and Accidental Death, Short- and Long-Term Disability Coverage - fully paid by the company\nPay range and compensation package\nSalary range is $80,000 - $85,000 plus bonus opportunities depending on experience.\nPlease note that this job description is not designed to cover or contain a comprehensive listing of activities, duties, or responsibilities that are required of the employee for this job. Duties, responsibilities, and activities may change at any time with or without notice.\n\nEqual Opportunity Statement\nEast Daley Analytics is an Equal Employment Opportunity (EEO) employer and welcomes all qualified applicants. Applicants will receive fair and impartial consideration without regard to race, sex, color, religion, national origin, age, disability, veteran status, genetic data, or other legally protected status.",
  "descriptionHtml": "<p><b>About the Company</b></p><br><p><b>East Daley Analytics</b> is a fast-paced leading provider of North American energy infrastructure and commodity market insights, offering data-driven solutions to help clients navigate investment decisions, M&amp;A transactions, and financial market opportunities.</p><br><br><p><b>Our Mission</b></p><br><p>We are moving the market at East Daley. We are doing cool stuff, sitting with the biggest decision-makers in the sector. We love to win! And have fun. When you are on the East Daley Team, you have the opportunity to sit at the table and have a hand in creating your future. We work together with transparency, focus on results, innovation, and a play-to-win attitude.</p><br><p><b>About the Role</b></p><br><p>We are seeking a results-driven, detail-oriented Associate Data Engineer to join a best-in-class team. The ideal candidate is an innovative problem solver who is self-motivated and proactive, showing extreme passion for organizing raw data into structured and consumable reports. S/he will have a relentless approach to translating data to drive unique market insights in order ultimately to help clients win. In this position, the Engineer will be able to create structure, in an unstructured and ever-changing environment, with a strong ability to challenge and be challenged in approaches, uses, and organization.</p><br><p>This position represents a rare opportunity to be part of the Core Data Team as a thought leader to build out the company’s data foundation, central to EDA’s strategy and market leadership. Their input and advisement of data sources, intake, processes, and implementation into production will be key to further scale product development and market insights for business stakeholders. The Associate Data Engineer will not only receive mentorship and leadership from the Lead Analyst but will also have unique exposure to C-Suite Executives and the long-term objectives of the business.</p><br><p>This is a full-time, exempt position, based in Greenwood Village, Colorado, and reports to the Lead Analyst of Data Technology.</p><br><p><b>About the Job</b></p><br><p><b>Responsibilities &amp; Requirements</b></p><br><ul><li>Working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases. As well as advanced knowledge of Python, SSIS, and SSRS are required.</li><li>Ingest, clean, normalize, and combine non-uniform, automated, and manual oil and gas fundamental data sources through scraping websites, PDFs, Excel-based models, vendor FTP feeds, and raw miscellaneous data files</li><li>Ensure that data is logically paired together in a database and collectively aggregated in a data warehouse</li><li>Good understanding of building and designing API’s</li><li>Develop, construct, test, and maintain databases and data warehouse architecture that supports the requirements of business stakeholders</li><li>Develop dataset processes for data modeling, mining, and production with scheduled deployments and releases in a predictable cadence</li><li>Recommend and implement ways to improve data reliability, efficiency, and quality within the data warehouse and for reports</li><li>Discover opportunities for new data acquisition</li><li>Run queries to produce consumable data and useable reports via.csv and excel for business stakeholders, both on a real-time basis and in a cyclical fashion</li><li>Create data tools and interfaces for analytics and team members that assist in building and optimizing products</li><li>Intake Analyst adjustments to complex optimization models and calculations to data files and sources on an ongoing basis, feeding back into databases for reporting accuracy and system of records</li><li>Identify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, and re-designing infrastructure for greater scalability</li><li>Communicate with both technical and non-technical internal customers to scope business requirements and layout detailed project plans with key milestones and owners</li><li>Document all data sources, methodologies, and processes as it relates to the formation and refinement of the database build-out and queries</li></ul><br><p><b>We are using Predictive Index in our hiring practices, please use this link to take the two PI assessments. Both must be completed: </b></p><br><p><a href=\"https://assessment.predictiveindex.com/Qb7/f8eaa326-e9b5-4488-8a5e-eea66f99e659?type=candidateba\"><u>https://assessment.predictiveindex.com/Qb7/f8eaa326-e9b5-4488-8a5e-eea66f99e659?type=candidateba</u></a></p><br><p><i><b>Qualifications/Education</b></i></p><ul><li>A minimum of 2 years of experience in technology with a focus on architectural design and planning, data, BI, and/or data warehousing experience</li><li>Advanced working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases</li><li>Experience building and optimizing raw data pipelines, architectures, and data sets, with strong analytics skills related to working with unstructured data sets</li><li>Machine learning experience and experience with big data infrastructure</li><li>Experience performing root cause analysis on internal and external data and processes to answer specific business questions</li><li>Proficiency in Microsoft Office Suite</li><li>Small to high-growth company experience preferred</li><li>Bachelor’s degree in information systems, Computer Information Systems, Engineering, Mathematics or similar field preferred</li><li>Oil and Gas industry experience is a plus</li><li>Co-Pilot and OpenAI understanding is a plus</li></ul><br><p><i><b>Benefits</b></i></p><ul><li>Medical (with multiple plan options), Dental, and Vision Coverage with Company Contributions</li><li>401K with a 3% Company Match</li><li>Flexible and Health Savings Account Options with Company Contributions</li><li>Life and Accidental Death, Short- and Long-Term Disability Coverage - fully paid by the company</li></ul><br><p><b>Pay range and compensation package</b></p><br><ul><li>Salary range is <b>$80,000 - $85,000</b> plus <b>bonus</b> opportunities depending on experience.</li></ul><br><ul><li>Please note that this job description is not designed to cover or contain a comprehensive listing of activities, duties, or responsibilities that are required of the employee for this job. Duties, responsibilities, and activities may change at any time with or without notice.</li></ul><br><br><p><b>Equal Opportunity Statement</b></p><br><ul><li>East Daley Analytics is an Equal Employment Opportunity (EEO) employer and welcomes all qualified applicants. Applicants will receive fair and impartial consideration without regard to race, sex, color, religion, national origin, age, disability, veteran status, genetic data, or other legally protected status.</li></ul>",
  "location": {
    "linkedinText": "Greenwood Village, CO",
    "postalAddress": null,
    "countryCode": "us",
    "geoId": "101851648",
    "parsed": {
      "text": "Greenwood Village, CO, United States",
      "countryCode": "US",
      "regionCode": null,
      "country": "United States",
      "countryFull": "United States of America",
      "state": "Colorado",
      "city": "Greenwood Village"
    }
  },
  "employmentType": "full_time",
  "workplaceType": "on_site",
  "workRemoteAllowed": false,
  "easyApplyUrl": null,
  "applyMethod": {
    "companyApplyUrl": "https://recruiting.paylocity.com/recruiting/jobs/All/060b535c-eb98-4110-be13-9ffb6ec1ff35/East-Daley-Analytics",
    "applyStartersPreferenceVoid": true,
    "inPageOffsiteApply": false,
    "type": "OffsiteApply"
  },
  "applicants": 1,
  "salary": {
    "text": "80,000 - 85,000 USD",
    "min": 80000,
    "max": 85000,
    "currency": "USD",
    "payPeriod": "YEARLY",
    "compensationType": "BASE_SALARY",
    "compensationSource": "JOB_POSTER_PROVIDED",
    "providedByEmployer": true
  },
  "jobFunctions": ["IT", "ANLS", "PRJM"],
  "benefits": [
    "Medical insurance",
    "Vision insurance",
    "Dental insurance",
    "401(k)",
    "Paid paternity leave",
    "Paid maternity leave",
    "Disability insurance"
  ],
  "benefitsDataSource": "JOB_POSTER",
  "views": 2,
  "expireAt": "2025-06-13T17:12:41.000Z",
  "new": true,
  "closedAt": null,
  "contentSource": "JOBS_PREMIUM_OFFLINE",
  "jobApplicationLimitReached": false,
  "applicantTrackingSystem": null,
  "company": {
    "id": "10110193",
    "universalName": "east-daley-analytics",
    "linkedinUrl": "https://www.linkedin.com/company/east-daley-analytics",
    "name": "East Daley Analytics",
    "logo": "https://media.licdn.com/dms/image/v2/C560BAQEGxEYgpsS60A/company-logo_400_400/company-logo_400_400/0/1662598862612/east_daley_capital_advisors_logo?e=1752710400&v=beta&t=Rvan7Yjw9z5EIhiKGdMI08ZCJbejVFc0wu3TZ9KhJmA",
    "employeeCount": 34,
    "employeeCountRange": {
      "start": 11,
      "end": 50
    },
    "followerCount": 4106,
    "description": "East Daley Analytics–  Dissecting operational risk across the energy value chain. Driving Energy Transparency.\nWe know that you don't always have the time to research assets, monitor your competition, and conduct due diligence. East Daley Analytics specializes in identifying, understanding, and monitoring operational risk at the asset level and how that translates to financial risk. We have built the largest U.S. energy asset database to cash flow to help identify which assets are most important and isolate their operational value. We can help with the heavy lifting by providing access to capital and commodity market experts through both subscription and advisory services.\n\nFor more information:\nContact:\ninsight@eastdaley.com\n",
    "locations": [
      {
        "country": "US",
        "geographicArea": "Colorado",
        "city": "Greenwood Village",
        "line1": "8100 E Maplewood Ave",
        "line2": "Suite 150",
        "postalCode": "80111",
        "headquarter": true,
        "parsed": {
          "text": "Greenwood, IN, United States",
          "countryCode": "US",
          "regionCode": null,
          "country": "United States",
          "countryFull": "United States of America",
          "state": "Indiana",
          "city": "Greenwood"
        }
      }
    ],
    "specialities": [
      "Asset-level intelligence and advisory services",
      "Crude Oil",
      "Midstream",
      "Analytics",
      "Data",
      "Consulting",
      "Natural Gas Liquids",
      "Natural Gas",
      "Earnings Forecasts",
      "MLPs",
      "Renewables",
      "Wind and Solar",
      "Hydrogen"
    ],
    "industries": ["IT Services and IT Consulting"],
    "logos": [
      {
        "url": "https://media.licdn.com/dms/image/v2/C560BAQEGxEYgpsS60A/company-logo_400_400/company-logo_400_400/0/1662598862612/east_daley_capital_advisors_logo?e=1752710400&v=beta&t=Rvan7Yjw9z5EIhiKGdMI08ZCJbejVFc0wu3TZ9KhJmA",
        "width": 400,
        "height": 400,
        "expiresAt": 1752710400000
      },
      {
        "url": "https://media.licdn.com/dms/image/v2/C560BAQEGxEYgpsS60A/company-logo_200_200/company-logo_200_200/0/1662598862612/east_daley_capital_advisors_logo?e=1752710400&v=beta&t=DPm5HXcpWe14VMtXhDeoyME-ZpGYqAmGz714q-Rj7CA",
        "width": 200,
        "height": 200,
        "expiresAt": 1752710400000
      },
      {
        "url": "https://media.licdn.com/dms/image/v2/C560BAQEGxEYgpsS60A/company-logo_100_100/company-logo_100_100/0/1662598862612/east_daley_capital_advisors_logo?e=1752710400&v=beta&t=gpO6XS3RQzELcTnkRT5SQlR5x9ok45Za1YgaSb0cHoM",
        "width": 100,
        "height": 100,
        "expiresAt": 1752710400000
      }
    ],
    "backgroundCovers": [
      {
        "url": "https://media.licdn.com/dms/image/v2/D563DAQGab0HybOZjpQ/image-scale_191_1128/image-scale_191_1128/0/1695145403341/east_daley_analytics_cover?e=1747850400&v=beta&t=VVedsPk9Kqjbii8Gr01zBcwYD8_FLm0fO8DKF7cflrs",
        "width": 1128,
        "height": 191,
        "expiresAt": 1747850400000
      },
      {
        "url": "https://media.licdn.com/dms/image/v2/D563DAQGab0HybOZjpQ/image-scale_127_750/image-scale_127_750/0/1695145403341/east_daley_analytics_cover?e=1747850400&v=beta&t=CWjcK9Nn_WLGvp844NiDivFubCnDRMJgNwe5ZbFOcJY",
        "width": 748,
        "height": 127,
        "expiresAt": 1747850400000
      },
      {
        "url": "https://media.licdn.com/dms/image/v2/D563DAQGab0HybOZjpQ/image-scale_108_640/image-scale_108_640/0/1695145403341/east_daley_analytics_cover?e=1747850400&v=beta&t=2uIOPjDWu5yhPTG7a1nhTIrMOrUXZxY1byr5dFA22y4",
        "width": 108,
        "height": 18,
        "expiresAt": 1747850400000
      }
    ]
  }
}
```

## Linkedin Jobs Search API

The actor stores results in a dataset. You can export data in various formats such as CSV, JSON, XLS, etc. You can scrape and access data on demand using API.

### Support and Feedback

We continuously enhance our tools based on user feedback. If you encounter technical issues or have suggestions for improvement:

- Create an issue on the actor’s Issues tab in Apify Console
- Contacts us at contact@harvest-api.com
