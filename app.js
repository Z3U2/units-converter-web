'use-strict'
const convertModule = require('./converter-module');
require('bootstrap/dist/js/bootstrap');
require('bootstrap-select/dist/js/bootstrap-select');

const measures = convertModule.getMeasures();

// Helper function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convert() {
    var value = $('#value').val();
    value = parseInt(value,10);
    var fromUnit = $("#from").val();
    var toUnit = $("#to").val();
    var convertedValue = convertModule.convertValue(value,fromUnit,toUnit);
    $("#convertedValue").html(convertedValue);
}

// getting all available measures
$('#measures').html( () => {
  var html = "";
  for (measure of measures) {
    html = html + " <li><a href=#"+measure+">"+capitalizeFirstLetter(measure)+"</a></li> "
  };
  return html
});


$(document).ready(() => {
  const hash = window.location.hash.slice(1);
  if (hash.length>0) {
    $('#view').load("views/"+hash+".html",() => {
      $('.selectpicker').selectpicker('render').addClass('col-sm-12 col-xs-12').selectpicker('setStyle');
      $('#value').keyup(convert)
    });
  }
  // else {
  //   $()
  // }
});

$(window).on('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash.length>0) {
    $('#view').load("views/"+hash+".html",() => {
      $('.selectpicker').selectpicker('render').addClass('col-sm-12 col-xs-12').selectpicker('setStyle');
      $('#value').keyup(convert);
    });
  }
});
