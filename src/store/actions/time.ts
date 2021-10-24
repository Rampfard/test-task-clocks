import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchDataWithDelay } from '../../api/api';
import { ITimezone } from '../../types';
import { SET_TIMEZONES } from '../actionTypes';
import { InitialState } from '../reducers/time';
import { setRequestStatus } from './ui';

type Thunk = ThunkAction<void, InitialState, unknown, AnyAction>;

type SetTimezones = {
  type: typeof SET_TIMEZONES;
  payload: ITimezone[];
};

export const setTimezones = (timezones: ITimezone[]) => ({
  type: SET_TIMEZONES,
  payload: timezones,
});

export const getTimezones = (): Thunk => async (dispatch) => {
  try {
    dispatch(setRequestStatus({ status: 'pending' }));

    const data = await fetchDataWithDelay();
    dispatch(setTimezones(data));

    dispatch(setRequestStatus({ status: 'completed' }));
  } catch (e) {
    dispatch(
      setRequestStatus({ status: 'error', error: (e as Error).message })
    );
  }
};

export type ActionTypes = SetTimezones;
