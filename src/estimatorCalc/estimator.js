import impactEstimator from './impact';
import severeImpactEstimator from './severeImpact';

const covid19ImpactEstimator = (data) => {
  const impact = impactEstimator(data);
  const severeImpact = severeImpactEstimator(data);

  return {
    data: { ...data },
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
