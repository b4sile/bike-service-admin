import {  Options, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url : string, options: Options = {}) => {
  if (!options?.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth') ?? '{}');
  (options.headers as any).set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};


export const dataProvider = jsonServerProvider('/api', httpClient);