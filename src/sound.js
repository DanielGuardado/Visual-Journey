const lowerAvg = avg(lowerHalfFreq);
const lowerUpperAvg = avg(lowerUpperHalfFreq);
const upperLowerAvg = avg(upperLowerFreqHalf);
const upperUpperAvg = avg(upperUpperFreqHalf);

const lowerLowerMax = max(lowerHalfFreq);
const lowerUpperMax = max(lowerUpperHalfFreq);
const upperLowerMax = max(upperLowerFreqHalf);
const upperUpperMax = max(upperUpperFreqHalf);

const lowerLowerMin = min(lowerHalfFreq);
const lowerUpperMin = min(lowerUpperHalfFreq);
const upperLowerMin = min(upperLowerFreqHalf);
const upperUpperMin = min(upperUpperFreqHalf);

const lowerLowerFr = lowerAvg / lowerHalfFreq.length;
const lowerUpperFr = lowerUpperAvg / lowerUpperHalfFreq.length;
const upperLowerFr = upperLowerAvg / upperLowerFreqHalf.length;
const upperUpperFr = upperUpperAvg / upperUpperFreqHalf.length;

const lowerLowerMaxFr = lowerLowerMax / lowerHalfFreq.length;
const lowerUpperMaxFr = lowerUpperMax / lowerUpperHalfFreq.length;
const upperLowerMaxFr = upperLowerMax / upperLowerFreqHalf.length;
const upperUpperMaxFr = upperUpperMax / upperUpperFreqHalf.length;

const lowerLowerMinFr = lowerLowerMin / lowerHalfFreq.length;
const lowerUpperMinFr = lowerUpperMin / lowerUpperHalfFreq.length;
const upperLowerMinFr = upperLowerMin / upperLowerFreqHalf.length;
const upperUpperMinFr = upperUpperMin / upperUpperFreqHalf.length;
