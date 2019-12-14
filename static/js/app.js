function buildStatedata(state) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use d3 to select the panel with id of `#sample-metadata`
  let selector = d3.select("#sample-metadata")
  // Use `.html("") to clear any existing metadata
  selector.html("");
  // Use `d3.json` to fetch the metadata for a sample
  const url = "/state_data/" + state;
  d3.json(url).then(data => {
    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(data).forEach(([key, value]) => {
      selector.append("h6")
      .text(key + ": " + value);
    });
  });
};

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


function buildChart(state) {

  // Use `d3.json` to fetch the state data for the plots
  const url = "/state_data/" + state;
  d3.json(url).then(data => {
    console.log("Data: ", data);  
    let dictLength = Object.keys(data).length;
    
  // Turn the big dictionary into the lists that plotly needs for inputs
    var date = [];
    var index = [];
    var number = [];
    var i = 0;
    
    for (var i = 0; i < dictLength; i++){
      date.push(data[i]["date"]);
      index.push(i);
      number.push(data[i]["number"]);
    }
    
    let trace2 = {
      x: index,
      y: number,
      color: "red",
      text: date,
      mode: "markers",
      marker: {
        opacity: 0.3,
        color: "red"
      }
    };
    let bubble_data = [trace2];
    Plotly.newPlot("bubble", bubble_data);
  });
};

function buildPie() {  
  const url2 = "/pie/";
  d3.json(url2).then(data => {
    let dictLength2 = Object.keys(data).length;
    var state_list = [];
    var number_list = [];
    var i = 0;
    
    for (var i = 0; i < dictLength2; i++){
      state_list.push(data[i]["state"]);
      number_list.push(data[i]["number"]);
    }
    let trace1 = {
      labels: state_list,
      values: number_list,
      type: "pie"
    };

    let pie_data = [trace1];
    Plotly.newPlot("pie", pie_data); 
  }); 
        // @TODO: Build a Bubble Chart using the sample data
    
        // @TODO: Build a Pie Chart
    
        // HINT: You will need to use slice() to grab the top 10 sample_values,
        // otu_ids, and labels (10 each).
};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/states").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    // const firstSample = sampleNames[0];
    const firstSample = "Acre"
    buildChart(firstSample);
    buildPie();
  });
}

function optionChanged(newState) {
  // Fetch new data each time a new sample is selected
  buildChart(newState);
}

// Initialize the dashboard
init();
