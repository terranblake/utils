"use strict";
exports.__esModule = true;
exports["default"] = {
    supported: {
        regulators: ['sec'],
        countries: ['usa'],
        taxonomyFileFormats: ['xlsx', 'zip', 'url'],
        taxonomyLinkTypes: ['xbrl'],
        exchanges: ['nasdaq', 'nyse', 'otc', 'otcbb', 'bats', 'nyse mkt', 'nyse arca', null],
        eventTypes: [
            'DocumentSync',
        ],
        eventPriorities: {
            1: 'critical',
            2: 'high',
            3: 'medium',
            4: 'low' // process this event when scheduled or in the next day
        },
        eventRefs: [
            'earnings' // a reference to earnings releases; this maps to either the Filing or Company model
        ]
    },
    states: [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
        "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
        "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ],
    itemStates: [
        'unseeded',
        'seeding',
        'seeded',
        'downloading',
        'downloaded',
        'crawling',
        'crawled',
        // todo:
        // there might need to be a separate completed state based on the implementation that comes after, but the current thought is that a node can and should be recrawled
        // regularly, so having a completed state is only necessary if there are intermediary steps that would come after being crawled which need a separate state
        'failed' // node was  unsuccessful in completng one of the following steps. view the accompanying models `statusReason` field to find out why
    ],
    filingDocumentParsingOrder: {
        0: 'calculation',
        1: 'instance'
    },
    filingDocumentTypes: ['calculation', 'presentation', 'label', 'definition', 'instance', 'schema', 'elements'],
    filingTypes: ['10-K', '10-Q', '20-F', 'S-1', 'POS AM', 'S-1/A', '485BPOS', '10-K/A', '497', '10-Q/A', '40-F', '8-K', '10-K405'],
    filingSubTypes: {
        '10-K': [
            'BusinessOperations',
            'RiskFactors',
            'SelectedFinancialData',
            'ManagementDiscussionAnalysis',
            'IncomeStatement',
            'BalanceSheet',
            'StatementOfCashFlows'
        ]
    },
    identifierPrefixes: ['us-gaap', 'srt', 'gaap', 'currency', 'stpr', 'exch', 'country', 'dei'],
    identifierDocumentFlags: ['statement', 'disclosure'],
    supportedUnitTypes: ['measure', 'divide', 'multiply'],
    rssFeeds: {
        sec: {
            all: 'https://www.sec.gov/Archives/edgar/xbrlrss.all.xml',
            by_cik: function (cik, type, count) {
                if (cik === void 0) { cik = null; }
                if (type === void 0) { type = '10-K'; }
                if (count === void 0) { count = 1000; }
                return "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + cik + "&type=" + type + "&dateb=&owner=exclude&start=0&count=" + count + "&output=atom";
            }
        }
    },
    factCurrencies: ['usd', 'iso4217_usd', 'iso4217-usd', 'u_iso4217usd', 'iso4217:usd'],
    // http://www.xbrl.org/utr/2017-07-12/utr.xml
    itemTypes: ['monetaryItemType', 'durationItemType', 'stringItemType', 'textItemType'],
    dateTypes: ['quarter', 'year', 'month', 'instant'],
    exchanges: ['nasdaq', 'nyse', 'otc', 'otcbb', 'bats', 'nyse mkt', 'nyse arca', null]
};
