import { Dispatch } from 'redux';
import { fetchDataWithDelay } from '../../api/api';
import { ITimezone } from '../../types';
import { SET_TIMEZONES } from '../actionTypes';
import { setRequestStatus } from './ui';

type SetTimezones = {
	type: typeof SET_TIMEZONES;
	payload: ITimezone[];
};

export const setTimezones = (timezones: ITimezone[]) => ({
	type: SET_TIMEZONES,
	payload: timezones,
});

export const getTimezones = () => async (dispatch: Dispatch) => {
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
