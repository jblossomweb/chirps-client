import { Dispatch, AnyAction } from 'redux';
import * as ChirpsServiceTypes from 'app/services/chirps/types';


import * as action from './creators';

export const getChirps = (
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => service.getChirps().then(
  (response) => dispatch(
    action.getChirpsSuccess(response as ChirpsServiceTypes.ResponseInterface['getChirpsSuccess']),
  ),
  (error) => dispatch(
    action.getChirpsError(error as ChirpsServiceTypes.ResponseInterface['getChirpsError']),
  ),
);

export const createChirp = (
  chirp: ChirpsServiceTypes.RequestInterface['createChirp'],
  service: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => service.createChirp(chirp.text).then(
  (response) => dispatch(
    action.createChirpSuccess(response as ChirpsServiceTypes.ResponseInterface['createChirpSuccess']),
  ),
  (error) => dispatch(
    action.createChirpError(error as ChirpsServiceTypes.ResponseInterface['createChirpError']),
  ),
);
