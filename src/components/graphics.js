import React, { Component } from "react";
import Chart from "chart.js";

export default class Graphics extends Component{
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
  
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        this.myChart = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: this.props.months,
                datasets: [
                    {
                        label: 'Vendas',
                        fills: true,
                        height: "500px",
                        responsive: true,
                        backgroundColor: 'rgba(75,192,192,1)',
                        hoverBackgroundColor: 'rgba(75,192,192,201)',
                        data: this.props.vendas
                    }
                ]
            }
        });
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.months;
        this.myChart.data.datasets[0].data = this.props.vendas;
        this.myChart.update();
        
    }
  
    render() {
        return (
            <div className="w-100">
                <canvas ref={this.chartRef} />

                {/*<Bar ref="chart" data={ this.data } />*/}
            </div>
        );
    }
} 