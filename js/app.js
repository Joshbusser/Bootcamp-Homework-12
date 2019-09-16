// from data.js
var tableData = data;


var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((sighting) => {

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {

        var cell = row.append("td");

        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var dateInput = d3.select("#datetime");

    var dateValue = dateInput.property("value");


    var filteredDate = tableData.filter(sighting => sighting.datetime === dateValue);  
    console.log(filteredDate);
    
    tbody.html("");

    // Loop through FilteredSighting data
    filteredDate.forEach((FilteredSighting) => {
        
        // Create new row within table body
        var row = tbody.append("tr");
            
        // Grab sighting data keys and values
        Object.entries(FilteredSighting).forEach(([key, value]) => {
            
            // Create new cell in row for each value within sighting data
            var cell = row.append("td");
          
             cell.text(value);     
        });         
    });
});
