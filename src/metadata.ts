import * as config from 'config';
import { promisify } from 'util';

const request = require('request');
const requestAsync = promisify(request);

export default async (model: string, ticker: string, accessionNumber: string) => {
    const metadataService = config.has('metadata-service.base') || 'http://localhost:5000';

    accessionNumber = accessionNumber && `&accessionNumber=${accessionNumber}` || '';
    const url = `${metadataService}/${model}?ticker=${ticker}${accessionNumber}`;

    const { body = {} } = await requestAsync({ method: 'GET', url, json: true });
    return body;
}