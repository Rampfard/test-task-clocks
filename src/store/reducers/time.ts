import { ITimezone } from '../../types';
import { ActionTypes } from '../actions/time';
import { SET_TIMEZONES } from '../actionTypes';

const initialState = {
  timezones: [] as ITimezone[],
};

export const time = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_TIMEZONES: {
      return {
        ...state,
        timezones: action.payload,
      };
    }
    default:
      return state;
  }
};

export type InitialState = typeof initialState;
