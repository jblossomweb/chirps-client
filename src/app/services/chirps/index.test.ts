import * as restMocks from 'core/rest/mocks';

import ChirpsService from './';
import {
  ServiceRestInterface as ChirpsServiceRestInterface,
} from './types';

const mockRest: ChirpsServiceRestInterface = {
  post: restMocks.mockRest().post,
  get: restMocks.mockRest().get,
  delete: restMocks.mockRest().delete,
  put: restMocks.mockRest().put,
};

const spies = {
  post: jest.spyOn(mockRest, 'post'),
  get: jest.spyOn(mockRest, 'get'),
  delete: jest.spyOn(mockRest, 'delete'),
  put: jest.spyOn(mockRest, 'put'),
}

  const mockService = new ChirpsService(restMocks.mockUrl, mockRest);

describe('services/chirps', () => {

  describe('createChirp', () => {
    const mockText = 'abasdfc'; // TODO: mock a meaningful value
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps`;
    const body = {
      text: mockText,
    };
    beforeEach(async () => {
      await mockService.createChirp(
        mockText,
      );
    });
    it(`makes a POST request`, () => {
      expect(spies.post).toHaveBeenCalled();
    });
    it(`makes a POST request to ${endpoint} with proper body and headers`, () => {
      expect(spies.post).toHaveBeenLastCalledWith(
        `${restMocks.mockUrl}${endpoint}`,
        body,
        { headers },
      );
    });
  });

  describe('getChirp', () => {
    const mockId = 'abasdfc'; // TODO: mock a meaningful value
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${mockId}`;
    beforeEach(async () => {
      await mockService.getChirp(
        mockId,
      );
    });
    it(`makes a GET request`, () => {
      expect(spies.get).toHaveBeenCalled();
    });
    it(`makes a GET request to ${endpoint} with proper headers`, () => {
      expect(spies.get).toHaveBeenLastCalledWith(
        `${restMocks.mockUrl}${endpoint}`,
        { headers },
      );
    });
  });

  describe('getChirps', () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps`;
    beforeEach(async () => {
      await mockService.getChirps(
      );
    });
    it(`makes a GET request`, () => {
      expect(spies.get).toHaveBeenCalled();
    });
    it(`makes a GET request to ${endpoint} with proper headers`, () => {
      expect(spies.get).toHaveBeenLastCalledWith(
        `${restMocks.mockUrl}${endpoint}`,
        { headers },
      );
    });
  });

  describe('updateChirp', () => {
    const mockId = 'abasdfc'; // TODO: mock a meaningful value
    const mockText = 'abasdfc'; // TODO: mock a meaningful value
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${mockId}`;
    const body = {
      text: mockText,
    };
    beforeEach(async () => {
      await mockService.updateChirp(
        mockId,
        mockText,
      );
    });
    it(`makes a PUT request`, () => {
      expect(spies.put).toHaveBeenCalled();
    });
    it(`makes a PUT request to ${endpoint} with proper body and headers`, () => {
      expect(spies.put).toHaveBeenLastCalledWith(
        `${restMocks.mockUrl}${endpoint}`,
        body,
        { headers },
      );
    });
  });

  describe('deleteChirp', () => {
    const mockId = 'abasdfc'; // TODO: mock a meaningful value
    const headers = {
      'Content-Type': 'application/json',
    };
    const endpoint = `/chirps/${mockId}`;
    beforeEach(async () => {
      await mockService.deleteChirp(
        mockId,
      );
    });
    it(`makes a DELETE request`, () => {
      expect(spies.delete).toHaveBeenCalled();
    });
    it(`makes a DELETE request to ${endpoint} with proper headers`, () => {
      expect(spies.delete).toHaveBeenLastCalledWith(
        `${restMocks.mockUrl}${endpoint}`,
        { headers },
      );
    });
  });

});
