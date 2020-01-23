import { Map } from 'immutable';
import concat from 'lodash/concat';
import { getInitialState } from 'core/store';

import paths from './paths';
import * as selectors from './selectors';

describe('store/chirps/selectors', () => {

  describe('getChirps', () => {
    const path = concat(['app'], paths.chirps());
    const value = Map({ foo: 'bar'});
    const state = getInitialState().setIn(path, value);
    it('should select value from chirps', () => {
      const selected = selectors.getChirps(state);
      expect(selected).toEqual(value.valueSeq());
    });
  });


  describe('getThinking', () => {
    const path = concat(['app'], paths.thinking());
    const value = true;
    const state = getInitialState().setIn(path, value);
    it('should select value from thinking', () => {
      const selected = selectors.getThinking(state);
      expect(selected).toEqual(value);
    });
  });


  describe('getError', () => {
    const path = concat(['app'], paths.error());
    const value = Map({ foo: 'bar'});
    const state = getInitialState().setIn(path, value);
    it('should select value from error', () => {
      const selected = selectors.getError(state);
      expect(selected).toEqual(value);
    });
  });

});
