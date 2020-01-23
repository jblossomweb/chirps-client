import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';

import { AppState } from 'core/store';
import { defaultRest } from 'core/rest/utils';
import config from 'app/config';

import * as chirpActions from 'app/store/chirps/action/creators';
import * as chirpsSelectors from 'app/store/chirps/selectors';

import ChirpsService from 'app/services/chirps';
import * as ChirpsServiceTypes from 'app/services/chirps/types';

import HomePage, { DispatchProps } from './HomePage';

const chirpsApiBase: string = config.services.chirps.url!;

const liveChirpsService = new ChirpsService(
  chirpsApiBase,
  defaultRest,
);

export const mapStateToProps = (
  state: AppState,
) => ({
  chirps: chirpsSelectors.getChirps(state),
  thinking: chirpsSelectors.getThinking(state),
});

export const mapDispatchToProps = (
  chirpsService: ChirpsServiceTypes.ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
): DispatchProps => ({
  getChirps: () => dispatch(
    chirpActions.getChirps(chirpsService)(dispatch)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(liveChirpsService),
)(withImmutablePropsToJS(
  HomePage,
) as any);
