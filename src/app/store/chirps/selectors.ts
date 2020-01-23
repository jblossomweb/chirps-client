import { createSelector } from 'reselect';
import { AppState } from 'core/store';

import * as DataTypes from './dataTypes';
import paths from './paths';

/*
 * getChirps
 */

const getChirpsSelector = (
  state: AppState,
): DataTypes.Chirps => state.get('app').getIn(
  paths.chirps(),
  DataTypes.defaultChirps,
);

export const getChirps = createSelector([
  getChirpsSelector,
], (chirps: DataTypes.Chirps) => chirps.valueSeq());

/*
 * getThinking
 */

const getThinkingSelector = (
  state: AppState,
): DataTypes.Thinking => state.get('app').getIn(
  paths.thinking(),
  DataTypes.defaultThinking,
);

export const getThinking = createSelector([
  getThinkingSelector,
], (thinking: DataTypes.Thinking) => thinking);

/*
 * getError
 */

const getErrorSelector = (
  state: AppState,
): DataTypes.Error => state.get('app').getIn(
  paths.error(),
  DataTypes.defaultError,
);

export const getError = createSelector([
  getErrorSelector,
], (error: DataTypes.Error) => error);
