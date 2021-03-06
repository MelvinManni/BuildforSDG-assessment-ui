import { estimateNumberOfInfected } from './utilData';
const severeImpactEstimator = (data) => {
  const severeImpact = {};
  return (
    (severeImpact.currentlyInfected = 50 * data.reportedCases),
    (severeImpact.infectionsByRequestedTime =
      severeImpact.currentlyInfected * estimateNumberOfInfected(data)),
    (severeImpact.severeCasesByRequestedTime = Math.trunc(
      0.15 * severeImpact.infectionsByRequestedTime
    )),
    (severeImpact.hospitalBedsByRequestedTime = Math.trunc(
      0.35 * data.totalHospitalBeds - severeImpact.severeCasesByRequestedTime
    )),
    (severeImpact.casesForICUByRequestedTime = Math.trunc(
      0.05 * severeImpact.infectionsByRequestedTime
    )),
    (severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
      0.02 * severeImpact.infectionsByRequestedTime
    )),
    severeImpact
  );
};
export default severeImpactEstimator;
