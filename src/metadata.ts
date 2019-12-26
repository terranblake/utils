import { Model } from 'mongoose';

import * as config from 'config';
import { promisify } from 'util';

const pluralize = require('pluralize');
const request = require('request');
const requestAsync = promisify(request);

export default async (model: Model<any, {}>, ticker: string, accessionNumber: string) => {
    if (!model) {
        throw new Error('no model provided. unable to retrieve metadata for a missing model');
    }

    const modelName = String(pluralize(model.modelName)).toLowerCase();
    const metadataService = config.has('metadata-service.base') || 'http://localhost:5000';

    accessionNumber = accessionNumber && `&accessionNumber=${accessionNumber}` || '';
    const url = `${metadataService}/${modelName}?ticker=${ticker}${accessionNumber}`;

    const { body = {} } = await requestAsync({ method: 'GET', url, json: true });
    return body;
}