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
    if(Object.entries(new_table1).length===0 ){
      new_table1 = tableData
    }
    //displayData(new_table1);
    var dateInputText = d3.select("#branch");
    var new_table2 = new_table1.filter(info => info.branch===dateInputText.property("value"));  
    if(Object.entries(new_table2).length===0 ){
      new_table2 = new_table1
    }
    //displayData(new_table2);
    var dateInputText = d3.select("#shift");
    var new_table3 = new_table2.filter(info => info.shift===parseFloat(dateInputText.property("value")));
    if(Object.entries(new_table3).length===0 ){
      new_table3 = new_table2
    }
    //displayData(new_table3);    
    var dateInputText = d3.select("#fcst_employee");    
    var new_table4 = new_table3.filter(info => info.fcst_employee===parseFloat(dateInputText.property("value")));
    if(Object.entries(new_table4).length===0 ){
      new_table4 = new_table3
    }
    //displayData(new_table4);
    var dateInputText = d3.select("#volumen");
    var new_table5 = new_table4.filter(info => info.volumen===parseFloat(dateInputText.property("value")));
    if(Object.entries(new_table5).length===0 ){
      new_table5 = new_table4
    }
    //debugger
    displayData(new_table5);
});




