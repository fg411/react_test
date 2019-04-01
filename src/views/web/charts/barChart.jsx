import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

class BarChart extends Component{
    componentDidMount(){
        let myChart = echarts.init(document.getElementById('bar_chart_box'));

        let xAxisData = [];
        let data1 = [];
        let data2 = [];
        for (let i = 0; i < 30; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }


        myChart.setOption({
            title: {
                text: '柱状图动画延迟',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
            },
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        });
    }
    render(){
        return (<div id="bar_chart_box" style={{width: 800, height: 500}}></div>)
    }
}

export default BarChart