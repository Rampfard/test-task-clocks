import { ActionTypes } from './../actions/ui';
import { IRequestStatus } from '../../types';
import { SET_REQUEST_STATUS } from './../actionTypes/index';

interface IUI {
  requestStatus: IRequestStatus;
}

export const initialState: IUI = {
  requestStatus: { status: null, error: null },
};

export const ui = (state = initialState, action: ActionTypes): IUI => {
  switch (action.type) {
    case SET_REQUEST_STATUS: {
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export type InitialState = typeof initialState;
