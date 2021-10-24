import { IRequestStatus } from './../../types/index';
import { SET_REQUEST_STATUS } from './../actionTypes/index';

type SetRequestStatus = {
  type: typeof SET_REQUEST_STATUS;
  payload: IRequestStatus;
};

export const setRequestStatus = (
  requestStatus: IRequestStatus
): SetRequestStatus => ({
  type: SET_REQUEST_STATUS,
  payload: requestStatus,
});

export type ActionTypes = SetRequestStatus;
