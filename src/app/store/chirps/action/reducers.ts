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
 * default export
 */
export default {
  [types.CHIRPS_GET_CHIRPS as string]: getChirps,
  [types.CHIRPS_GET_CHIRPS_SUCCESS as string]: getChirpsSuccess,
  [types.CHIRPS_GET_CHIRPS_ERROR as string]: getChirpsError,
};
