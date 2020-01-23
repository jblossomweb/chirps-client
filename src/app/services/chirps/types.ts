import { RestInterface } from 'core/rest/types';
import * as AppTypes from 'app/types';

export interface ServiceErrorResponse {
  name: string,
  code: number,
  message: string,
};

export interface ServiceDeleteResponse {
  message: string,
  chirp: AppTypes.Chirp,
};

export interface RequestInterface {
  createChirp: { text: AppTypes.Chirp['text'] },
  getChirp: { id: AppTypes.Chirp['id'] },
  getChirps: {},
  updateChirp: { id: AppTypes.Chirp['id'], text: AppTypes.Chirp['text'] },
  deleteChirp: { id: AppTypes.Chirp['id'] },
};

export interface ResponseInterface {
  createChirpSuccess: AppTypes.Chirp,
  createChirpError: ServiceErrorResponse,
  getChirpSuccess: AppTypes.Chirp,
  getChirpError: ServiceErrorResponse,
  getChirpsSuccess: AppTypes.Chirps,
  getChirpsError: ServiceErrorResponse,
  updateChirpSuccess: AppTypes.Chirp,
  updateChirpError: ServiceErrorResponse,
  deleteChirpSuccess: ServiceDeleteResponse,
  deleteChirpError: ServiceErrorResponse,
};

export interface ServiceRestInterface {
  post: RestInterface['post'],
  get: RestInterface['get'],
  put: RestInterface['put'],
  delete: RestInterface['delete'],
};

export interface ServiceInterface {

  createChirp: (
    text: string,
  ) => Promise<
    ResponseInterface['createChirpSuccess'] |
    ResponseInterface['createChirpError']
  >,

  getChirp: (
    id: string,
  ) => Promise<
    ResponseInterface['getChirpSuccess'] |
    ResponseInterface['getChirpError']
  >,

  getChirps: (
  ) => Promise<
    ResponseInterface['getChirpsSuccess'] |
    ResponseInterface['getChirpsError']
  >,

  updateChirp: (
    id: string,
    text: string,
  ) => Promise<
    ResponseInterface['updateChirpSuccess'] |
    ResponseInterface['updateChirpError']
  >,

  deleteChirp: (
    id: string,
  ) => Promise<
    ResponseInterface['deleteChirpSuccess'] |
    ResponseInterface['deleteChirpError']
  >,

};
