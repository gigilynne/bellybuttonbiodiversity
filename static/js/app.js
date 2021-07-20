// Use d3 to read the data
    // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    //  Use `sample_values` as the values for the bar chart.
    //  Use `otu_ids` as the labels for the bar chart.
    //  Use `otu_labels` as the hovertext for the chart.

// Create an array for needed data 
var sample_values = Object.sample_values
var otu_ids = Object.otu_ids
var otu_labels = Object.otu_labels

// Create the Trace
var trace1 = [{
    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: "h"
  }];
  
  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout
  var layout = {
    title: {text: "Top 10 OTUs for Selected Individual",
        font: {size: 24}},
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTUs" }
  };
  
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar", data, layout);


// 3. Create a bubble chart that displays each sample.

    //  Use `otu_ids` for the x values.

    //  Use `sample_values` for the y values.

    //  Use `sample_values` for the marker size.

    //  Use `otu_ids` for the marker colors.

    //  Use `otu_labels` for the text values.

// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// 6. Update all of the plots any time that a new sample is selected. 


 