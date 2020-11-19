import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [
        555,
        12038,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,],
      labels: [
      "1/22/20",
      "2/1/20",
      "2/15/20",
      "3/1/20",
      "3/15/20",
      "4/1/20",
      "4/15/20",
      "5/1/20",
      "5/7/20",]
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;