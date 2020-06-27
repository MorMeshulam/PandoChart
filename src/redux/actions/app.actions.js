//api imports
import { getRequest } from "../../api/api.service";
import { buildChartData, getChartConfig } from "../../helper/data.helper";
import { GET_CHART_DATA } from "../../api/request";

export const FETCH_CHART_DATA = "FETCH_CHART_DATA";
export const FETCH_CHART_DATA_PENDING = "FETCH_CHART_DATA_PENDING";
export const FETCH_CHART_DATA_COMPLETED = "FETCH_CHART_DATA_COMPLETED";
export const FETCH_CHART_DATA_REJECTED = "FETCH_CHART_DATA_REJECTED";

export const fetchChartData = ({ dateFrom, dateTo }) => {
  return (dispatch) => {
    try {
      dispatch(fetchChartDataPending());
      const dateFromFormated = new Date(dateFrom).toJSON()
      const dateToFormated = new Date(dateTo).toJSON()

      const query = `dateFrom=${dateFromFormated}&dateTo=${dateToFormated}`;
      return getRequest(GET_CHART_DATA, query)
        .then((response) => {
          const chart = {
            options: getChartConfig("jobs"),
            data: buildChartData(response.data),
          };

          return dispatch(fetchChartDataComplete(chart));
        })
        .catch((error) => dispatch(fetchChartDataRejected(error)));
    } catch (error) {
      return dispatch(fetchChartDataRejected(error));
    }
  };
};

const fetchChartDataPending = () => {
  return {
    type: FETCH_CHART_DATA_PENDING,
  };
};

const fetchChartDataComplete = (data) => {
  return {
    type: FETCH_CHART_DATA_COMPLETED,
    payload: data,
  };
};

const fetchChartDataRejected = (error) => {
  return {
    type: FETCH_CHART_DATA_REJECTED,
    payload: error,
  };
};
