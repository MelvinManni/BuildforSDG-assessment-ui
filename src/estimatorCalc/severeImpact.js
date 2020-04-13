import { estimateNumberOfInfected } from './utilData';

const severeImpactEstimator = (data) => {
  const severeImpact = {};

  // CHALLENGE-1
  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected
  * estimateNumberOfInfected(data);
  // CHALLENGE-2
  severeImpact.severeCasesByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * 0.15
  );
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(
    data.totalHospitalBeds * 0.35 - severeImpact.severeCasesByRequestedTime
  );
  // CHALLENGE-3
  severeImpact.casesForICUByRequestedTime = Math.trunc(
    0.05 * severeImpact.infectionsByRequestedTime
  );
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
    0.02 * severeImpact.infectionsByRequestedTime
  );

  return severeImpact;
};

export default severeImpactEstimator;
