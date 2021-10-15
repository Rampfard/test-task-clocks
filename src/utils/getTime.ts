export const getCurrentTime = () => {
	const time = new Date();

	return {
		hours: time.getHours(),
		minutes: time.getMinutes(),
		seconds: time.getSeconds(),
	};
};

export const getCurrentUTCTime = () => {
	const time = new Date();

	// UTC for initial time 00:00
	// so we can choose timzezone and get current time according to timezone

	return {
		hours: time.getUTCHours(),
		minutes: time.getUTCMinutes(),
		seconds: time.getUTCSeconds(),
	};
};

export const getTime = (isTimezone: boolean = false) =>
	isTimezone ? getCurrentUTCTime() : getCurrentTime();
