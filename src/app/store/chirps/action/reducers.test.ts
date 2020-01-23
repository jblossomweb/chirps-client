import { fromJS } from 'immutable';
import { AppReducer, getInitialState } from 'core/store';
import mockChirps from 'app/__mocks__/chirps.json';
import * as AppTypes from 'app/types';
import * as actionTypes from './types';
import actionReducers from './reducers';
import paths from '../paths';

const mockError: Error = new Error('uh oh');

describe('store/chirps/action/reducers', () => {

  describe('CHIRPS_GET_CHIRPS', () => {
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS'] = {
      type: 'CHIRPS_GET_CHIRPS',
    };
    const reducer = actionReducers[action.type] as AppReducer;

    it('should set thinking to true', () => {
      const path = paths.thinking();
      const state = getInitialState().setIn(path, undefined);
      expect(state.getIn(path)).toEqual(undefined);
      const newState = reducer(state, action);
      expect(newState.getIn(path)).toEqual(true);
    });
  });

  describe('CHIRPS_GET_CHIRPS_SUCCESS', () => {
    const chirps = mockChirps;
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS_SUCCESS'] = {
      type: 'CHIRPS_GET_CHIRPS_SUCCESS',
      payload: {
        chirps,
      },
    };
    const reducer = actionReducers[action.type] as AppReducer;

    it('should set thinking to false', () => {
      const path = paths.thinking();
      const state = getInitialState().setIn(path, true);
      expect(state.getIn(path)).toEqual(true);
      const newState = reducer(state, action);
      expect(newState.getIn(path)).toEqual(false);
    });

    it('should set error to null', () => {
      const path = paths.error();
      const state = getInitialState().setIn(path, mockError);
      expect(state.getIn(path)).toEqual(mockError);
      const newState = reducer(state, action);
      expect(newState.getIn(path)).not.toEqual(mockError);
      expect(newState.getIn(path)).toEqual(null);
    });

    it('should set chirps as map from payload', () => {
      const chirpsPath = paths.chirps();
      const chirpPath = (id: AppTypes.Chirp['id']) => paths.chirp(id);
      const state = getInitialState().setIn(chirpsPath, fromJS({}));
      expect(state.getIn(chirpsPath)).toEqual(fromJS({}));
      const newState = reducer(state, action);
      chirps.forEach(chirp => {
        expect(
          newState.getIn(chirpPath(chirp.id)),
        ).toEqual(
          fromJS(chirp),
        );
      })
    });
  });

  describe('CHIRPS_GET_CHIRPS_ERROR', () => {
    const action: actionTypes.Interface['CHIRPS_GET_CHIRPS_ERROR'] = {
      type: 'CHIRPS_GET_CHIRPS_ERROR',
      payload: {
        error: mockError,
      },
    };
    const reducer = actionReducers[action.type] as AppReducer;

    it('should set thinking to false', () => {
      const path = paths.thinking();
      const state = getInitialState().setIn(path, true);
      expect(state.getIn(path)).toEqual(true);
      const newState = reducer(state, action);
      expect(newState.getIn(path)).toEqual(false);
    });

    it('should set error to payload.error', () => {
      const path = paths.error();
      const state = getInitialState().setIn(path, undefined);
      expect(state.getIn(path)).toEqual(undefined);
      const newState = reducer(state, action);
      expect(newState.getIn(path)).not.toEqual(undefined);
      expect(newState.getIn(path)).not.toEqual(null);
      expect(newState.getIn(path)).toEqual(action.payload.error);
    });
  });

});
