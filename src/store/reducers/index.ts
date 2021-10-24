import { combineReducers } from 'redux';

import { time } from './time';
import { ui } from './ui';

const rootReducers = combineReducers({
  time,
  ui,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
