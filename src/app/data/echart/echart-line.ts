let option = {
    animationDuration : 1000,
    animationDurationUpdate : 1000,
    animationEasingUpdate : 'cubicOut',
    grid: {
        top: '10%',
        left: '3%',
        right: '6%',
        bottom: '7%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        data : [],
        boundaryGap: false, 
        axisLabel: {
            textStyle: {
                color: '#7e7f80',
            }
        },
        axisLine: {
            show : false
        },
        splitLine: {
            lineStyle: { 
                color: '#f1f2f6',
                width : 1,
                opacity: 0.8,
                type: 'dotted'
            }
        },
        axisTick :{ 
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: { 
                color: '#f1f2f6',
                width : 1,
                opacity: 0.8
            }
        },
        splitNumber: 3,
        axisLine :{ 
            show :false
        },
        scale : false,
        axisTick :{ 
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#7e7f80',
            },
            formatter : '{value}%'
        }
    },
    series: [{
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: [],
        lineStyle: {
            normal: {
                color: '#ffb400', 
                width: 1
            }
        },
        itemStyle: {
            normal: {}
        },
    },{ 
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: [],
        lineStyle: {
            normal: {
                color: '#448fff',
                width: 1
            },
        },
    }]
};
module.exports = option;