import { Dispatch, AnyAction } from 'redux';
import * as ChirpsServiceTypes from 'app/services/chirps/types';

import * as ActionTypes from './types';
import * as thunks from './thunks';


/*
 * CHIRPS_GET_CHIRPS
 */

export const getChirps: (
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => ActionTypes.Interface['CHIRPS_GET_CHIRPS'] = (
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => {
  thunks.getChirps(service)(dispatch);
  return {
    type: ActionTypes.CHIRPS_GET_CHIRPS,
  };
};

/*
 * CHIRPS_GET_CHIRPS_SUCCESS
 */
export const getChirpsSuccess: (
  response: ChirpsServiceTypes.ResponseInterface['getChirpsSuccess'],
) => ActionTypes.Interface['CHIRPS_GET_CHIRPS_SUCCESS'] = response => ({
  type: ActionTypes.CHIRPS_GET_CHIRPS_SUCCESS,
  payload: {
    chirps: response,
  },
});

/*
 * CHIRPS_GET_CHIRPS_ERROR
 */
export const getChirpsError: (
  error: ChirpsServiceTypes.ResponseInterface['getChirpsError'],
) => ActionTypes.Interface['CHIRPS_GET_CHIRPS_ERROR'] = error => ({
  type: ActionTypes.CHIRPS_GET_CHIRPS_ERROR,
  payload: {
    error,
  },
});
