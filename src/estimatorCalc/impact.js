import { estimateNumberOfInfected } from './utilData';
const impactEstimator = (data) => {
  const impact = {};
  return (
    (impact.currentlyInfected = 10 * data.reportedCases),
    (impact.infectionsByRequestedTime =
      impact.currentlyInfected * estimateNumberOfInfected(data)),
    (impact.severeCasesByRequestedTime = Math.trunc(
      0.15 * impact.infectionsByRequestedTime
    )),
    (impact.hospitalBedsByRequestedTime = Math.trunc(
      0.35 * data.totalHospitalBeds - impact.severeCasesByRequestedTime
    )),
    (impact.casesForICUByRequestedTime = Math.trunc(
      0.05 * impact.infectionsByRequestedTime
    )),
    (impact.casesForVentilatorsByRequestedTime = Math.trunc(
      0.02 * impact.infectionsByRequestedTime
    )),
    impact
  );
};
export default impactEstimator;
