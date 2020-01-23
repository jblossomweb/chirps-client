import { AppReducers, combineAllReducers } from 'core/store';
import extend from 'lodash/extend';

/* import your reducers here. */
import chirpsReducers from 'app/store/chirps/action/reducers';

const appReducers: AppReducers = extend({},
  /* register your reducers here. */
  chirpsReducers,
) as AppReducers;

export default combineAllReducers(appReducers);
