import * as AppTypes from 'app/types';

export const CHIRPS_GET_CHIRPS = 'CHIRPS_GET_CHIRPS';
export const CHIRPS_GET_CHIRPS_SUCCESS = 'CHIRPS_GET_CHIRPS_SUCCESS';
export const CHIRPS_GET_CHIRPS_ERROR = 'CHIRPS_GET_CHIRPS_ERROR';

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

};
