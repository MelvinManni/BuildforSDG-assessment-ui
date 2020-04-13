export const timeToElapse = (periodType, time) => {
  let period;
  return (
    (period =
      'days' === periodType
        ? time
        : 'weeks' === periodType
        ? 7 * time
        : 30 * time),
    period
  );
};
export const estimateNumberOfInfected = (data) => {
  let factor;
  return (
    (factor =
      'days' === data.periodType
        ? Math.trunc(data.timeToElapse / 3)
        : 'weeks' === data.periodType
        ? Math.trunc((7 * data.timeToElapse) / 3)
        : Math.trunc((30 * data.timeToElapse) / 3)),
    (factor = 2 ** factor),
    factor
  );
};
