
import global from "../../global/global.js"
import dtime from 'time-formater'
export default{
convertedData:[],
convertData(data,geoCoordMap) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
},
setView(myChart){
  var categoryData = [];
  var barData = [];
  var maxBar = 30;
  var sum = 0;

  for (var i = 0; i < this.convertedData[0].length; i++) {
      sum += this.convertedData[0][i].value[2];
  }
  var selectedItems = this.convertedData[0]
  selectedItems.sort(function (a, b) {
      return b.value[2] - a.value[2];
  });
  selectedItems = selectedItems.length >= maxBar ? selectedItems.slice(0,maxBar):selectedItems
  selectedItems.sort(function (a, b) {
      return a.value[2] - b.value[2];
  });
  for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
      categoryData.push(selectedItems[i].name);
      barData.push(selectedItems[i].value[2]);
  }
  console.log(barData,categoryData)
  this.option.yAxis.data = categoryData
  // this.option.xAxis.axisLabel = {show: !!this.convertedData[0].length}
  this.option.title.id = 'statistic'
  this.option.title.text = this.convertedData[0].length ? '平均: ' + (sum / this.convertedData[0].length).toFixed(2) : ''
  // this.option.series.id = 'bar'
  this.option.series[2].data = barData

  myChart.setOption(this.option)

},
showView(myChart,self){
    global.httpGetWithBaseUrl(self,'/weather/all',{date:dtime(new Date().getTime()).format('YYYY-MM-DD')}).then(res=>{
      var tempGeoCoordMap = {}
      var tempData = []
      res.data.forEach(item=>{
        tempGeoCoordMap[item.city.name]=[parseFloat(item.city.lat),parseFloat(item.city.lng)]
        tempData.push({name:item.city.name,value:item.wendu})

      })
      this.convertedData=[this.convertData(tempData,tempGeoCoordMap),
      this.convertData(tempData.sort(function (a, b) {
          return b.value - a.value;
      }).slice(0, 6),tempGeoCoordMap)]
      this.option.series[0].data = this.convertedData[0]
      this.option.series[1].data = this.convertedData[1]
      // console.log(tempData,tempGeoCoordMap,this.convertedData)
      this.setView(myChart)
    })
},
option : {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [
        {
            text: '江浙沪皖主要城市 气象 当日数据',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    ],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip : {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: 'TOP 30',
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
        data: []
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            // data: this.convertedData[0],
            symbolSize: function (val) {
                return Math.max(val[2] /2, 8);
            },
            label: {
                normal: {
                    formatter: '{@[2]}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // data: this.convertedData[1],
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{@[2]}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            },
            data: []
        }
    ]
}

}
