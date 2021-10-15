export type RequestStatusType = 'completed' | 'pending' | 'error' | null;

export interface IRequestStatus {
	status: RequestStatusType;
	error?: null | string;
}

export interface ITimezone {
	name: string;
	timezone: string;
}
