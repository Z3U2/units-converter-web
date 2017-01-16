'use-strict'
const convertModule = require('./converter-module');
const $ = require('jquery');
// const bootstrap = require('bootstrap/dist/js/bootstrap');

// Helper function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log($('#measures').html());

// getting all available measures
// $('#measures').html( () => {
//   const measures = convertModule.getMeasures();
//   console.log("loaded measures",measures);
//   var html = "";
//   for (measure of measures) {
//     html = html + " <li><a href=#"+measure+">"+capitalizeFirstLetter(measure)+"</a></li> "
//   };
//   return html
// });

// chosing right units for given measure
// $('#measures').change( () => {
//   var selectedMeasure = $('#measures option:selected').text();
//   var units = convertModule.getUnits(selectedMeasure);
//   var html;
//   for (unit of units) {
//     html = html + " <option value="+unit.abbr+">"+unit.singular+"</option> "
//   };
//   $(".units").html(html);
//
// });
// $(window).on('hashchange', () => {
//   const hash = window.location.hash.slice(1);
//   if (hash.length>0) {
//     let units = convertModule.getUnits(hash);
//     var html;
//     for (unit of units) {
//       html = html + " <option value="+unit.abbr+">"+unit.singular+"</option> "
//     };
//     $(".units").html(html)
//   }
//
// });
//
// $('#value').keyup(() => {
//   var value = $('#value').val();
//   console.log(value);
//   value = parseInt(value,10);
//   var fromUnit = $("#from").val();
//   var toUnit = $("#to").val();
//   var convertedValue = convertModule.convertValue(value,fromUnit,toUnit);
//   $("#convertedValue").html(convertedValue);
//   console.log(convertedValue);
// })
