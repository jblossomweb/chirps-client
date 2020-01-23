import mockDispatch from 'core/mocks/dispatch';
import * as restMocks from 'core/rest/mocks';

import mockChirps from 'app/__mocks__/chirps.json';

import ChirpsService from 'app/services/chirps';
import * as ChirpsServiceTypes from 'app/services/chirps/types';

import * as actionTypes from './types';
import * as actionCreators from './creators';
import * as actionThunks from './thunks';

const mockRest: ChirpsServiceTypes.ServiceRestInterface = {
  get: restMocks.mockRest().get,
  post: restMocks.mockRest().post,
  put: restMocks.mockRest().put,
  delete: restMocks.mockRest().delete,
};

const mockChirpsService: ChirpsServiceTypes.ServiceInterface =
  new ChirpsService(
    restMocks.mockUrl,
    mockRest,
  )
;

const spies = {
  getChirps: jest.spyOn(actionThunks, 'getChirps'),
};

describe('store/chirps/action/creators', () => {

  describe('getChirps', () => {
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS'] =
      actionCreators.getChirps(mockChirpsService)(mockDispatch)
    ;
    const expectedAction: actionTypes.Interface['CHIRPS_GET_CHIRPS'] = {
      type: actionTypes.CHIRPS_GET_CHIRPS,
    };

    it(`should call getChirps thunk`, () => {
      expect(spies.getChirps).toHaveBeenCalled();
    });
    it(`should return ${expectedAction.type} action type`, () => {
      expect(action.type).toEqual(expectedAction.type)
    });
  });

  describe('getChirpsSuccess', () => {
    const response: ChirpsServiceTypes.ResponseInterface['getChirpsSuccess'] = mockChirps;
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS_SUCCESS'] = actionCreators.getChirpsSuccess(response);
    const expectedAction: actionTypes.Interface['CHIRPS_GET_CHIRPS_SUCCESS'] = {
      type: actionTypes.CHIRPS_GET_CHIRPS_SUCCESS,
      payload: {
        chirps: response,
      }
    };
    it(`should return ${expectedAction.type} action type`, () => {
      expect(action.type).toEqual(expectedAction.type);
    });
    it(`should return 'chirps' in action payload`, () => {
      expect(action.payload.chirps).toEqual(expectedAction.payload.chirps);
    });
  });

  describe('getChirpsError', () => {
    const error = new Error('uh oh');
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS_ERROR'] = actionCreators.getChirpsError(error);
    const expectedAction: actionTypes.Interface['CHIRPS_GET_CHIRPS_ERROR'] = {
      type: actionTypes.CHIRPS_GET_CHIRPS_ERROR,
      payload: {
        error,
      }
    };
    it(`should return ${expectedAction.type} action type`, () => {
      expect(action.type).toEqual(expectedAction.type);
    });
    it(`should return 'error' in action payload`, () => {
      expect(action.payload.error).toEqual(expectedAction.payload.error);
    });
  });

});
