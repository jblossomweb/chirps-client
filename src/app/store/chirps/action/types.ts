import * as AppTypes from 'app/types';

export const CHIRPS_GET_CHIRPS = 'CHIRPS_GET_CHIRPS';
export const CHIRPS_GET_CHIRPS_SUCCESS = 'CHIRPS_GET_CHIRPS_SUCCESS';
export const CHIRPS_GET_CHIRPS_ERROR = 'CHIRPS_GET_CHIRPS_ERROR';

export const CHIRPS_CREATE_CHIRP = 'CHIRPS_CREATE_CHIRP';
export const CHIRPS_CREATE_CHIRP_SUCCESS = 'CHIRPS_CREATE_CHIRP_SUCCESS';
export const CHIRPS_CREATE_CHIRP_ERROR = 'CHIRPS_CREATE_CHIRP_ERROR';

export const CHIRPS_UPVOTE_CHIRP = 'CHIRPS_UPVOTE_CHIRP';
export const CHIRPS_UPVOTE_CHIRP_SUCCESS = 'CHIRPS_UPVOTE_CHIRP_SUCCESS';
export const CHIRPS_UPVOTE_CHIRP_ERROR = 'CHIRPS_UPVOTE_CHIRP_ERROR';

export interface Interface {

  [CHIRPS_GET_CHIRPS]: {
    type: 'CHIRPS_GET_CHIRPS',
  },

  [CHIRPS_GET_CHIRPS_SUCCESS]: {
    type: 'CHIRPS_GET_CHIRPS_SUCCESS',
    payload: {
      chirps: AppTypes.Chirps,
    },
  },

  [CHIRPS_GET_CHIRPS_ERROR]: {
    type: 'CHIRPS_GET_CHIRPS_ERROR',
    payload: {
      error: Error,
    },
  },

  [CHIRPS_CREATE_CHIRP]: {
    type: 'CHIRPS_CREATE_CHIRP',
  },

  [CHIRPS_CREATE_CHIRP_SUCCESS]: {
    type: 'CHIRPS_CREATE_CHIRP_SUCCESS',
    payload: {
      chirp: AppTypes.Chirp,
    },
  },

  [CHIRPS_CREATE_CHIRP_ERROR]: {
    type: 'CHIRPS_CREATE_CHIRP_ERROR',
    payload: {
      error: Error,
    },
  },

  [CHIRPS_UPVOTE_CHIRP]: {
    type: 'CHIRPS_UPVOTE_CHIRP',
  },

  [CHIRPS_UPVOTE_CHIRP_SUCCESS]: {
    type: 'CHIRPS_UPVOTE_CHIRP_SUCCESS',
    payload: {
      chirp: AppTypes.Chirp,
    },
  },

  [CHIRPS_UPVOTE_CHIRP_ERROR]: {
    type: 'CHIRPS_UPVOTE_CHIRP_ERROR',
    payload: {
      error: Error,
    },
  },

};
