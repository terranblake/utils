const moment = require('moment');
const Parser = require('rss-parser');

import { Filing, Company } from '@postilion/models';

import { default as logger } from './logger';
import { default as metadata } from './metadata';
import { default as parserOptions } from './parsing-options';
import { default as enums } from './enums';

const { rss } = parserOptions;
const { rssFeeds } = enums;

export async function getLatestFilingFeed(ticker: string, source: string = 'sec') {
	let parser = new Parser(rss);
 
	// todo: fix how interfaces interact with eachother when
	// referencing results from a mongodb query
	const company: any = Company.findOne({ ticker }).lean();
	if (!company) {
		throw new Error(`no company found with ticker ${ticker}`);
	}

	const rssUrl: string = rssFeeds[source].by_cik(company.cik, source);
	let feed: any = await parser.parseURL(rssUrl);

	let parsedRssEntries: any = [];
	for (let entry of feed.items) {
		const accessionNumber = entry.id.split('accession-number=')[1];

		const foundFiling: any = await Filing.findOne({ refId: accessionNumber });
		if (foundFiling) {
			logger.info(`skipping already parsed filing ${foundFiling._id} refId ${accessionNumber} company ${foundFiling.company}`);
			continue;
		}

		const filingMetadata: any = await metadata(Filing, ticker, accessionNumber);

		const rssFiling: any = {
			company: company._id,
			publishedAt: moment(entry.pubDate).format(),
			fiscalYearEnd: moment(filingMetadata.fiscalYearEnd, 'MMYY').format(),
			...filingMetadata
		}

		if (!rssFiling) {
			logger.error(`raw filing returned null after scraping from SEC. this should be investigated company ${JSON.stringify(company)}`);
			continue;
		}

		parsedRssEntries.push(rssFiling)
	};

	return parsedRssEntries;
}

export default { getLatestFilingFeed }