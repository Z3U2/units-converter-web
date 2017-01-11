'use-strict'
const convertModule = require('./converter-module');
const $ = require('jquery');

const measures = convertModule.getMeasures();

$('#measures').html( () => {
  var html = "";
  for (measure of measures) {
    html = html + " <option value="+measure+">"+measure+"</option> "
  };
  return html
} );


$('#measures').change( () => {
  var selectedMeasure = $('#measures option:selected').text();
  var units = convertModule.getUnits(selectedMeasure);
  var html;
  for (unit of units) {
    html = html + " <option value="+unit.abbr+">"+unit.singular+"</option> "
  };
  $(".units").html(html);

});
