import {
  FETCH_CHART_DATA_PENDING,
  FETCH_CHART_DATA_COMPLETED,
  FETCH_CHART_DATA_REJECTED,
} from "../actions/app.actions";

const INITIAL_STATE = {
  chart: {
    options: {},
    data: [],
  },

  loading: true,
  error: null,
  errorMessage: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHART_DATA_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHART_DATA_COMPLETED:
      return {
        ...state,
        loading: false,
        chart: action.payload,
      };
    case FETCH_CHART_DATA_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
