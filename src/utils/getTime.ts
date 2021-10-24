export const getTime = (isTimezone: boolean) => {
  const time = new Date();

  return {
    hours: isTimezone ? time.getUTCHours() : time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};
