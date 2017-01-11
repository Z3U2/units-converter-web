'use-strict'
const convertModule= require('./converter-module');

console.log('logging measures');
const measures = convertModule.getMeasures();
console.log(measures)

for (measure of measures) {
  console.log('logging ' + measure + 'units');
  let units = convertModule.getUnits(measure);
  console.log(units);
  console.log('logging a random conversion');
  let fromUnit = units[Math.floor(Math.random()*units.length)].abbr;
  let toUnit = units[Math.floor(Math.random()*units.length)].abbr;
  let value = Math.random()*10;
  let convertedValue = convertModule.convertValue(value,fromUnit,toUnit);
  console.log(value,' ',fromUnit,' is equal to ',convertedValue,' ',toUnit);
};
