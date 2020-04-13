import impactEstimator from './impact';
import severeImpactEstimator from './severeImpact';
const covid19ImpactEstimator = (data) => {
  const impact = impactEstimator(data),
    severeImpact = severeImpactEstimator(data);
  return { data: { ...data }, impact: impact, severeImpact: severeImpact };
};
export default covid19ImpactEstimator;
