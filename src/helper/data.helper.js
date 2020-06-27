import _ from "lodash";
import moment from "moment";
import config from "../config/charts";

export const buildChartData = (data) => {
  console.clear();
  console.log("data", data);

  const sortData = _.sortBy(data, (s) => s.date);
  const resultData = [];

  _.forEach(sortData, (curr) => {

    const date = moment(curr["viewDate"]).format("MMM DD");
    const allJobs = curr["allJobs"];
    const comulativeJobsView = curr["comulativeJobsView"];
    const predictableJobsView = curr["predictableJobsView"];

    const item = [date, comulativeJobsView, predictableJobsView, allJobs];
    resultData.push(item);
  });
  console.log("resultData", resultData);

  return [
    [
      { type: "string", label: "Day" },
      "Comulative jobs view",
      "Predicted jobs view",
      "All jobs",
    ],
    ...resultData,
  ];
};

export const getChartConfig = (name) => {
  return config[name];
};
