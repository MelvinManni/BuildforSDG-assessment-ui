import { estimateNumberOfInfected } from './utilData';

const impactEstimator = (data) => {
  const impact = {};

  // CHALLENGE-1
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * estimateNumberOfInfected(data);
  // CHALLENGE-2
  impact.severeCasesByRequestedTime = Math.trunc(
    impact.infectionsByRequestedTime * 0.15
  );
  impact.hospitalBedsByRequestedTime = Math.trunc(
    data.totalHospitalBeds * 0.35 - impact.severeCasesByRequestedTime
  );
  // CHALLENGE-3
  impact.casesForICUByRequestedTime = Math.trunc(
    0.05 * impact.infectionsByRequestedTime
  );
  impact.casesForVentilatorsByRequestedTime = Math.trunc(
    0.02 * impact.infectionsByRequestedTime
  );

  return impact;
};

export default impactEstimator;
