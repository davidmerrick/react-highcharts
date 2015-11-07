var React = require('react');
global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
var Highcharts = require("highcharts");
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');

var config = {
  chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]
        }]
};

ReactDOM.render(
  <ReactHighcharts config={config}></ReactHighcharts>,
  document.getElementById('test')
);
ReactDOM.render(
  <Highlight className="jsx">{require("raw-loader!./index.jsx")}</Highlight>,
  document.getElementById('code-js')
);
ReactDOM.render(
  <Highlight className="html">{require("raw-loader!./index.html")}</Highlight>,
  document.getElementById('code-html')
);

require("file?name=[name].[ext]!./index.html");
require("file?name=[name].[ext]!./more.html");
require("file?name=[name].[ext]!./style.css");
require("file?name=[name].[ext]!./tomorrow.css");

