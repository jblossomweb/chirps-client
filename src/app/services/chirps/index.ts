import {
  ServiceInterface,
  ServiceRestInterface,
} from './types';

import {
  promisePost,
  promiseGet,
  promisePut,
  promiseDelete,
} from 'core/rest/utils';

class ChirpsService implements ServiceInterface {
  private apiUrl: string;
  private rest: ServiceRestInterface;

  constructor (
    apiUrl: string,
    rest: ServiceRestInterface,
  ) {
    this.apiUrl = apiUrl;
    this.rest = rest;
  }

  public createChirp (
    text: string,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps`;
    const url = `${this.apiUrl}${endpoint}`;
    const body = { text };
    return promisePost({
      url,
      body,
      headers,
    }, this.rest);
  }

  public getChirp (
    id: string,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${id}`;
    const url = `${this.apiUrl}${endpoint}`;
    return promiseGet({
      url,
      headers,
    }, this.rest);
  }

  public getChirps (
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps`;
    const url = `${this.apiUrl}${endpoint}`;
    return promiseGet({
      url,
      headers,
    }, this.rest);
  }

  public updateChirp (
    id: string,
    text: string,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${id}`;
    const url = `${this.apiUrl}${endpoint}`;
    const body = { text };
    return promisePut({
      url,
      body,
      headers,
    }, this.rest);
  }

  public deleteChirp (
    id: string,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${id}`;
    const url = `${this.apiUrl}${endpoint}`;
    return promiseDelete({
      url,
      headers,
    }, this.rest);
  }

};

export default ChirpsService;
