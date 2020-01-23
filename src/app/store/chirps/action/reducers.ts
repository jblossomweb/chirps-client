import { fromJS } from 'immutable';
import { AppState } from 'core/store';
import * as AppTypes from 'app/types';
import paths from '../paths';
import * as types from './types';

/*
 * CHIRPS_GET_CHIRPS
 */
export const getChirps = (
  state: AppState,
  action: types.Interface['CHIRPS_GET_CHIRPS'],
) => state
  .setIn(paths.thinking(), true)
;

/*
 * CHIRPS_GET_CHIRPS_SUCCESS
 */
export const getChirpsSuccess = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_GET_CHIRPS_SUCCESS'],
) => {
  const { chirps } = payload;
  const reducer = (
    map: AppTypes.ChirpMap, 
    chirp: AppTypes.Chirp,
  ) => ({
    ...map,
    [chirp.id]: chirp,
  });
  return state
    .setIn(paths.thinking(), false)
    .setIn(paths.error(), null)
    .setIn(
      paths.chirps(),
      fromJS(chirps.reduce(reducer, {})),
    )
  ;
};

/*
 * CHIRPS_GET_CHIRPS_ERROR
 */
export const getChirpsError = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_GET_CHIRPS_ERROR'],
) => state
  .setIn(paths.thinking(), false)
  .setIn(paths.error(), payload.error)
;

/*
 * CHIRPS_CREATE_CHIRP
 */
export const createChirp = (
  state: AppState,
  action: types.Interface['CHIRPS_CREATE_CHIRP'],
) => state
  .setIn(paths.thinking(), true)
;

/*
 * CHIRPS_CREATE_CHIRP_SUCCESS
 */
export const createChirpSuccess = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_CREATE_CHIRP_SUCCESS'],
) => {
  const { chirp } = payload;
  return state
    .setIn(paths.thinking(), false)
    .setIn(paths.error(), null)
    .setIn(
      paths.chirp(chirp.id),
      fromJS(chirp),
    )
  ;
};

/*
 * CHIRPS_CREATE_CHIRP_ERROR
 */
export const createChirpError = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_CREATE_CHIRP_ERROR'],
) => state
  .setIn(paths.thinking(), false)
  .setIn(paths.error(), payload.error)
;

/*
 * CHIRPS_UPVOTE_CHIRP
 */
export const upvoteChirp = (
  state: AppState,
  action: types.Interface['CHIRPS_UPVOTE_CHIRP'],
) => state
  .setIn(paths.thinking(), true)
;

/*
 * CHIRPS_UPVOTE_CHIRP_SUCCESS
 */
export const upvoteChirpSuccess = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_UPVOTE_CHIRP_SUCCESS'],
) => {
  const { chirp } = payload;
  return state
    .setIn(paths.thinking(), false)
    .setIn(paths.error(), null)
    .setIn(
      paths.chirp(chirp.id),
      fromJS(chirp),
    )
  ;
};

/*
 * CHIRPS_UPVOTE_CHIRP_ERROR
 */
export const upvoteChirpError = (
  state: AppState,
  { payload }: types.Interface['CHIRPS_UPVOTE_CHIRP_ERROR'],
) => state
  .setIn(paths.thinking(), false)
  .setIn(paths.error(), payload.error)
;

/*
 * default export
 */
export default {
  [types.CHIRPS_GET_CHIRPS as string]: getChirps,
  [types.CHIRPS_GET_CHIRPS_SUCCESS as string]: getChirpsSuccess,
  [types.CHIRPS_GET_CHIRPS_ERROR as string]: getChirpsError,
  [types.CHIRPS_CREATE_CHIRP as string]: createChirp,
  [types.CHIRPS_CREATE_CHIRP_SUCCESS as string]: createChirpSuccess,
  [types.CHIRPS_CREATE_CHIRP_ERROR as string]: createChirpError,
  [types.CHIRPS_UPVOTE_CHIRP as string]: upvoteChirp,
  [types.CHIRPS_UPVOTE_CHIRP_SUCCESS as string]: upvoteChirpSuccess,
  [types.CHIRPS_UPVOTE_CHIRP_ERROR as string]: upvoteChirpError,
};
