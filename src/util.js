function fractionate(val, minVal, maxVal) {
  return (val - minVal) / (maxVal - minVal);
}

function modulate(val, minVal, maxVal, outMin, outMax) {
  const fraction = fractionate(val, minVal, maxVal);
  const delta = outMax - outMin;
  return outMin + fraction * delta;
}

function avg(arr) {
  const total = arr.reduce(function (sum, b) {
    return sum + b;
  });
  return total / arr.length;
}
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const abs = Math.abs;
const PI = Math.PI;

export { modulate, avg, PI };
