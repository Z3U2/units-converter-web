'use-strict'
const convert = require('convert-units');

const getUnits = (measure) => {
  return convert().list(measure);
};

const getMeasures = () => {
  return convert().measures();
};

const convertValue = (value,from,to) => {
  return convert(value).from(from).to(to);
};

module.exports = {
  getUnits : getUnits,
  getMeasures : getMeasures,
  convertValue : convertValue
};
