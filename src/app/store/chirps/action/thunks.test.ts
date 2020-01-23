import Window from 'window-or-global';
import mockDispatch from 'core/mocks/dispatch';
import * as restMocks from 'core/rest/mocks';

import ChirpsService from 'app/services/chirps';
import * as ChirpsServiceTypes from 'app/services/chirps/types';

import mockChirps from 'app/__mocks__/chirps.json';

import * as actionCreators from './creators';
import * as actionThunks from './thunks';

const mockRest: ChirpsServiceTypes.ServiceRestInterface = {
  get: restMocks.mockRest().get,
  post: restMocks.mockRest().post,
  put: restMocks.mockRest().put,
  delete: restMocks.mockRest().delete,
};

const mockRestError: ChirpsServiceTypes.ServiceRestInterface = {
  get: restMocks.mockRestError().get,
  post: restMocks.mockRestError().post,
  put: restMocks.mockRestError().put,
  delete: restMocks.mockRestError().delete,
};

const mockService = new ChirpsService(restMocks.mockUrl, mockRest);
const mockServiceError = new ChirpsService(restMocks.mockUrl, mockRestError);

Window.console = {
  error: jest.fn(),
};

const getSpies = (
  service: ChirpsService,
) => ({
  getChirps: jest.spyOn(service, 'getChirps'),
})

const spies = {
  success: getSpies(mockService),
  fail: getSpies(mockServiceError),
}

describe('store/chirps/action/thunks', () => {

  describe('getChirps', () => {
    const response = mockChirps;
    const error = restMocks.mockErrorResponse;
    const success: Promise<any> = actionThunks.getChirps(
      mockService,
    )(mockDispatch);
    const fail: Promise<any> = actionThunks.getChirps(
      mockServiceError,
    )(mockDispatch);

    it(`always calls service.getChirps`, async() => {
      await success;
      expect(spies.success.getChirps).toHaveBeenCalled();
      await fail;
      expect(spies.fail.getChirps).toHaveBeenCalled();
    });

    it(`dispatches getChirpsSuccess action upon success`, async() => {
      const dispatchedAction = await success;
      expect(dispatchedAction).toEqual(
        mockDispatch(actionCreators.getChirpsSuccess(response))
      );
    });

    it(`dispatches getChirpsError action upon fail`, async() => {
      const dispatchedAction = await fail;
      expect(dispatchedAction).toEqual(
        mockDispatch(actionCreators.getChirpsError(error))
      );
    });
  });
});
