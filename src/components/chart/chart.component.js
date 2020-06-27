import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Chart from "react-google-charts";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { fetchChartData } from "../../redux/actions/app.actions";

import Loader from "../loader/loader";

const StyledChart = styled(Chart)`
  z-index: 2;
`;
const DateFilter = styled.div`
  display: flex;
  margin: 1rem;
`;

const DateFilterLabel = styled.span`
  display: flex;
  align-items: center;
`;

const StyledDatePicker = styled(DatePicker)`
  margin: 1rem;
  font-size: 1rem;
`;


//default from and to date filters (previus month range)
const currentDate = new Date();
const prevMonth = new Date().setDate(currentDate.getDate() - 30);
//---------------------------------------------------------------

class PandoChart extends React.Component {
  state = {
    dateFrom: prevMonth,
    dateTo: currentDate
  };

  componentDidMount() {
    this.props.fetchChartData(this.state);
  }

  onChangeDate = (key, date) => {
    this.setState({ [key]: date }, () => {
      this.props.fetchChartData(this.state);
    });
  };

  renderDatePicker = (label, key) => {
    return (
     <>
      <DateFilterLabel>{label}</DateFilterLabel>
      <StyledDatePicker
        selected={this.state[key]}
        onChange={(date) => this.onChangeDate(key, date)}
        timeIntervals={15}
        dateFormat="MMMM d, yyyy"
        placeholderText={label}
      />
     </>
    );
  };

  render() {
    const { loading, chart } = this.props;

    if (loading) return <Loader />;

    return (
      <>
        <DateFilter>
          {this.renderDatePicker("From", "dateFrom")}
          {this.renderDatePicker("To", "dateTo")}
        </DateFilter>

        <StyledChart
          width={"100vw"}
          height={500}
          chartType="LineChart"
          loader={<Loader />}
          data={chart.data}
          options={chart.options}
          legendToggle
        />
      </>
    );
  }
}

const mapStateToProps = ({ app }, props) => {
  return {
    chart: app.chart,
    loading: app.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchChartData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PandoChart);
