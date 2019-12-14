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


function buildCharts(state) {

  // Use `d3.json` to fetch the state data for the plots
  const url = "/state_data/" + state;
  d3.json(url).then(data => {
    console.log("Data: ", data);
  
    let dictLength = Object.keys(data).length

    // Turn the big dictionary into the lists that plotly needs for inputs
    var date = [];
    var number = [];
    var i = 0;

    for (var i = 0; i < dictLength; i++)
    {
      year.push(data[i]["date"]);
      number.push(data[i]["number"]);
    }     

  //the keys with only their top 10 entries (the data was sorted in python before being served)
    
    // let otu_ids = samples["otu_ids"];
    // let sample_values = samples["sample_values"];
    // let otu_labels = samples["otu_labels"];

    // let trace1 = {
    //   labels: otu_ids.slice(0, 10),
    //   values: sample_values.slice(0, 10),
    //   hovertext: otu_labels.slice(0, 10),
    //   type: "pie"
    // };

    // let pie_data = [trace1];
    // Plotly.newPlot("pie", pie_data);

    let trace2 = {
      x: date,
      y: number,
      color: "red",
      text: state,
      mode: "markers",
      marker: {
        opacity: 0.3,
        color: "red"
      }
    };
    let bubble_data = [trace2];
    Plotly.newPlot("bubble", bubble_data);
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
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newState) {
  // Fetch new data each time a new sample is selected
  buildCharts(newState);
  buildMetadata(newState);
}

// Initialize the dashboard
init();
