// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference table body

var tbody = d3.select("tbody");

data.forEach((sighting) => {

    var row = tbody.append("tr");

    Object.defineProperties(sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');

button.on("click", function(){
    var dateInput = d3.select("#datetime");

    var dateValue = dateInput.property("value");

    var filteredDate = tableData.filter(sighting => sighting.datetime === dateValue);
    console.log(filteredDate);

    tbody.html("");

    filteredData.forEach((FilteredSighting) => {
        var row = t.body.append("tr");

        Object.entries(FilteredSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            
            cell.text(value);
        });
    });


});


