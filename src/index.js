
exports.min = function min(array) {
 if (typeof(array) !== 'undefined' && array.length > 0) {
    let min = array[0];
    for (let elem in array) {
      if (array[elem] < min) {
        min = array[elem];
      }
    }
    return min;
  } else {
    return 0;
  }
};

exports.max = function max(array) {
 if (typeof(array) !== 'undefined' && array.length > 0) {
    let max = array[0];
    for (let elem in array) {
      if (array[elem] > max) {
        max = array[elem];
      }
    }
    return max;
  } else {
    return 0;
  }
};

exports.avg = function avg(array) {
 if (typeof(array) !== 'undefined' && array.length > 0) {
    let sum = 0;
    for (let elem in array) {
      sum += array[elem];
    }
    return sum / (array.length);
  } else {
    return 0;
  }
};
