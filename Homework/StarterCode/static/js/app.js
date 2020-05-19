// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", click_function);

tableData.forEach(Table_data);

function Table_data(data) {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("th");
      cell.text(value);
    });
}

function click_function(){
    d3.event.preventDefault();

    d3.selectAll("tr").remove()

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value")

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    filteredData.forEach(Table_data)

}

