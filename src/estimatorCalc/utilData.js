export const timeToElapse = (periodType, time) => {
  let period;

  if (periodType === 'days') {
    period = time;
  } else if (periodType === 'weeks') {
    period = time * 7;
  } else {
    period = time * 30;
  }

  return period;
};

export const estimateNumberOfInfected = (data) => {
  let factor;

  if (data.periodType === 'days') {
    factor = Math.trunc(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    factor = Math.trunc((data.timeToElapse * 7) / 3);
  } else {
    factor = Math.trunc((data.timeToElapse * 30) / 3);
  }

  factor = 2 ** factor;

  return factor;
};
