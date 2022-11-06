const unitDecider = (value) => {
  const length = value.toString().length;
  console.log(length);
  if (length <= 3) {
    return value;
  } else if (length === 4) {
    return `${(value / 1000).toFixed(1)} 천`;
  } else if (length <= 6) {
    return `${(value / 10000).toFixed(1)} 만`;
  } else if (length <= 8) {
    return `${parseInt(value / 10000)} 만`;
  } else {
    return `${(value / 100000000).toFixed(1)} 억`;
  }
};

export default unitDecider;
