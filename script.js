const data = [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    type: "scatter",
  },
];

const layout = {
  title: "Basic Scatter Plot",
  xaxis: { title: "X-Axis" },
  yaxis: { title: "Y-Axis" },
};

Plotly.newPlot("myDiv", data, layout);
