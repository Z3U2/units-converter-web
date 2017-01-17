const convertModule = require('./converter-module');
const fs = require('fs');
const beautify_html = require('js-beautify').html;

// this is bad practice but I needed to generate html from my module
// will make the code more readable later

const measures = convertModule.getMeasures();

for (measure of measures) {
  var text = beautify_html('<div class="col-sm-6 col-xs-12" ><label>From</label><br><select class="selectpicker" id="from">');
  var units = convertModule.getUnits(measure);
  var unitsText = "";
  var input = '<div class="col-sm-12 col-xs-12"><input class="form-control" placeholder="..." aria-describedby="basic-addon1" id="value"></div>';
  input = beautify_html(input);
  for (unit of units) {
    unitsText = unitsText + ' <option value="'+unit.abbr+'">'+unit.singular+"</option> ";
  }
  unitsText = beautify_html(unitsText);
  text = text + unitsText + '</select><br><label>Entry</label><br>'+input+'</div> <div class="col-sm-6 col-xs-12"><label>To</label><br> <select class="selectpicker" id="to">'+unitsText+'</select><br><label>Result</label><br><span id="convertedValue" style="padding-left:20px"></span></div>';
  text = beautify_html(text);
  fs.writeFileSync('views/'+ measure+'.html',text,(err) => {
    if (err) throw err;
    console.log(measure + 'saved');
  })
}
