export const config = {
  jobs: {

    hAxis: {
      // title: "Time",
      minValue: 1

    },
    vAxis: {
      title: "Job Views",
      minValue: 1,
      viewWindow:{ min: 0 }
    },
    legend: { position: "bottom", maxLines: 3 },
    lineWidth: 5,
    pointSize: 10,
    
    series: {
        0: { 
            color: '#65c1d4', 
            curveType: "function", 
            lineDashStyle: [4, 1],
            // pointShape: { dent: 0.05 } 
          },
        1: { color: '#96c03b', curveType: "function" },
        2: { color: '#dddddd', curveType: "function" }
    },
  },
};


export default config;