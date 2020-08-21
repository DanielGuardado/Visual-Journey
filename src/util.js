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
function max(arr) {
  let maximum;
  arr.forEach((el) => {
    if (!maximum) {
      maximum = el;
    }
    if (el > maximum) {
      maximum = el;
    }
  });
  return maximum;
}

function min(arr) {
  let minimum;
  arr.forEach((el) => {
    if (!minimum) {
      minimum = el;
    }
    if (el < minimum) {
      minimum = el;
    }
  });
  return minimum;
}

const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const abs = Math.abs;
const PI = Math.PI;

export { modulate, avg, PI, max, min };
