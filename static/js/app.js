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
  
  // Plot the chart to a div tag with id "bar"
  Plotly.newPlot("bar", data, layout);


// 3. Create a bubble chart that displays each sample.
    //  Use `otu_ids` for the x values.
    //  Use `sample_values` for the y values.
    //  Use `sample_values` for the marker size.
    //  Use `otu_ids` for the marker colors.
    //  Use `otu_labels` for the text values.

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          sizemode: 'area'
        }
      };
      
      var trace2 = {
        x: [1, 2, 3, 4],
        y: [14, 15, 16, 17],
        text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          //setting 'sizeref' to lower than 1 decreases the rendered size
          sizeref: 2,
          sizemode: 'area'
        }
      };
      
      var trace3 = {
        x: [1, 2, 3, 4],
        y: [20, 21, 22, 23],
        text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          //setting 'sizeref' to less than 1, increases the rendered marker sizes
          sizeref: 0.2,
          sizemode: 'area'
        }
      };
      
      // sizeref using above forumla
      var desired_maximum_marker_size = 40;
      var size = [400, 600, 800, 1000];
      var trace4 = {
        x: [1, 2, 3, 4],
        y: [26, 27, 28, 29],
        text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
        mode: 'markers',
        marker: {
          size: size,
          //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
          sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
          sizemode: 'area'
        }
      };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
        title: 'Bacteria Cultures Per Sample ',
        showlegend: false,
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU ID" },
        height: 600,
        width: 1200
      };
      
      Plotly.newPlot('bubble', data, layout);    

// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// 6. Update all of the plots any time that a new sample is selected. 


 