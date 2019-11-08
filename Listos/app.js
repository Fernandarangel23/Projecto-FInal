// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

function displayData(data){
data.forEach((info) => {
  var row = tbody.append("tr");
  Object.entries(info).forEach(([key, value]) => {

    var cell = row.append("td");
if( value > 1500000000000){
    cell.text(moment(value).format('DD/MM/YYYY'));}
else {cell.text(value);}
  });
});

}




displayData(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.text("")
    var dateInputText = d3.select("#datetime");
    var new_table1 = tableData.filter(info => moment(info.datetime).format('DD/MM/YYYY')===dateInputText.property("value"));
    displayData(new_table1);
    var dateInputText = d3.select("#city");
    var new_table2 = tableData.filter(info => info.city===dateInputText.property("value"));  
    displayData(new_table2);
    var dateInputText = d3.select("#state");
    var new_table3 = tableData.filter(info => info.state===parseFloat(dateInputText.property("value")));
    displayData(new_table3);    
    var dateInputText = d3.select("#country");    
    var new_table4 = tableData.filter(info => info.country===parseFloat(dateInputText.property("value")));
    displayData(new_table4);
    var dateInputText = d3.select("#shape");
    var new_table5 = tableData.filter(info => info.shape===parseFloat(dateInputText.property("value")));
    displayData(new_table5);
});



