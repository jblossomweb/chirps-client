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

/*
 * CHIRPS_CREATE_CHIRP
 */

export const createChirp: (
  chirp: ChirpsServiceTypes.RequestInterface['createChirp'],
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => ActionTypes.Interface['CHIRPS_CREATE_CHIRP'] = (
  chirp: ChirpsServiceTypes.RequestInterface['createChirp'],
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => {
  thunks.createChirp(chirp, service)(dispatch);
  return {
    type: ActionTypes.CHIRPS_CREATE_CHIRP,
  };
};

/*
 * CHIRPS_CREATE_CHIRP_SUCCESS
 */
export const createChirpSuccess: (
  response: ChirpsServiceTypes.ResponseInterface['createChirpSuccess'],
) => ActionTypes.Interface['CHIRPS_CREATE_CHIRP_SUCCESS'] = response => ({
  type: ActionTypes.CHIRPS_CREATE_CHIRP_SUCCESS,
  payload: {
    chirp: response,
  },
});

/*
 * CHIRPS_CREATE_CHIRP_ERROR
 */
export const createChirpError: (
  error: ChirpsServiceTypes.ResponseInterface['createChirpError'],
) => ActionTypes.Interface['CHIRPS_CREATE_CHIRP_ERROR'] = error => ({
  type: ActionTypes.CHIRPS_CREATE_CHIRP_ERROR,
  payload: {
    error,
  },
});

/*
 * CHIRPS_UPVOTE_CHIRP
 */

export const upvoteChirp: (
  chirp: ChirpsServiceTypes.RequestInterface['upvoteChirp'],
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => ActionTypes.Interface['CHIRPS_UPVOTE_CHIRP'] = (
  chirp: ChirpsServiceTypes.RequestInterface['upvoteChirp'],
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => {
  thunks.upvoteChirp(chirp, service)(dispatch);
  return {
    type: ActionTypes.CHIRPS_UPVOTE_CHIRP,
  };
};

/*
 * CHIRPS_UPVOTE_CHIRP_SUCCESS
 */
export const upvoteChirpSuccess: (
  response: ChirpsServiceTypes.ResponseInterface['upvoteChirpSuccess'],
) => ActionTypes.Interface['CHIRPS_UPVOTE_CHIRP_SUCCESS'] = response => ({
  type: ActionTypes.CHIRPS_UPVOTE_CHIRP_SUCCESS,
  payload: {
    chirp: response,
  },
});

/*
 * CHIRPS_UPVOTE_CHIRP_ERROR
 */
export const upvoteChirpError: (
  error: ChirpsServiceTypes.ResponseInterface['upvoteChirpError'],
) => ActionTypes.Interface['CHIRPS_UPVOTE_CHIRP_ERROR'] = error => ({
  type: ActionTypes.CHIRPS_UPVOTE_CHIRP_ERROR,
  payload: {
    error,
  },
});
