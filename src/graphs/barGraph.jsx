
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [
            "1/22/20",
            "2/1/20",
            "2/15/20",
            "3/1/20",
            "3/15/20",
            "4/1/20",
            "4/15/20",
            "5/1/20",
            "5/7/20",
          ],
        }
      },
      series: [
        {
          name: "Cases",
          data: [
            555,
            12038,
            69030,
            88369,
            167466,
            932638,
            2055423,
            3343777,
            3845718,]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;

