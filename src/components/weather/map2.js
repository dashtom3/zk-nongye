
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
  myChart.setOption(this.option)
  myChart.on('brushselected', renderBrushed);
  var self = this
  function renderBrushed(params) {
    console.log(params)
     var mainSeries = params.batch[0].selected[0];

     var selectedItems = [];
     var categoryData = [];
     var barData = [];
     var maxBar = 30;
     var sum = 0;
     var count = 0;

     for (var i = 0; i < mainSeries.dataIndex.length; i++) {
         var rawIndex = mainSeries.dataIndex[i];
         var dataItem = self.convertedData[0][rawIndex];
         var pmValue = dataItem.value[2];

         sum += pmValue;
         count++;

         selectedItems.push(dataItem);
     }

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
     console.log(barData)
     this.setOption({
         yAxis: {
             data: categoryData
         },
         xAxis: {
             axisLabel: {show: !!count}
         },
         title: {
             id: 'statistic',
             text: count ? '平均: ' + (sum / count).toFixed(2) : ''
         },
         series: {
             id: 'bar',
             data: barData
         }
     });
  }
  setTimeout(function () {
      myChart.dispatchAction({
          type: 'brush',
          areas: [
              {
                  geoIndex: 0,
                  brushType: 'polygon',
                  coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77],[118.76,34.63],[118.6,34.6],[118.46,34.6],[118.33,34.57],[118.05,34.56],[117.6,34.56],[117.41,34.56],[117.25,34.56],[117.11,34.56],[117.02,34.56],[117,34.56],[116.94,34.56],[116.00,34.55],[115.85,34.5],[115.80,34.44],[115.78,34.37],[115.77,34.33],[115.75,34.24],[115.40,34.15],[115.30,34.09],[115.25,34.06],[115.23,33.96],[115.22,33.9],[115.20,33.8],[115.15,33.75],[115.14,33.68],[115.12,33.65],[115.11,33.61],[115.10,33.59],[115.02,33.5],[115.00,33.46],[114.70,33.37],[114.70,33.3],[114.70,33.28],[114.70,33.27],[114.75,32.46],[114.80,32.14],[114.87,31.86],[115.00,31.62],[115.10,31.27],[115.25,30.85],[115.60,30.46],[116.50,28.94],[118.77,27.63],[119.77,27.03],[120.89,27.04],[120.97,27.3],[121.07,27.49],[121.28,27.59],[121.38,27.61],[121.56,27.73],[121.73,27.89],[122.03,28.2],[122.3,28.5],[122.46,28.72],[122.5,28.77],[122.54,28.82],[122.56,28.82],[122.58,28.85],[122.6,28.86],[122.61,28.91],[122.71,29.02],[122.73,29.08],[122.93,29.44],[122.99,29.54],[123.03,29.66],[123.05,29.73],[123.16,29.92],[123.24,30.02],[123.28,30.13],[123.32,30.29],[123.36,30.36],[123.36,30.55],[123.36,30.74],[123.36,31.05],[123.36,31.14],[123.36,31.26],[123.38,31.42],[123.46,31.74],[123.48,31.83],[123.48,31.95],[123.46,32.09],[123.34,32.25],[123.22,32.39],[123.12,32.46],[123.07,32.48],[123.05,32.49],[122.97,32.53],[122.91,32.59],[122.83,32.81],[122.77,32.87],[122.71,32.9],[122.56,32.97],[122.38,33.05],[122.3,33.12],[122.26,33.15],[122.22,33.21],[122.22,33.3],[122.22,33.39],[122.18,33.44],[122.07,33.56],[121.99,33.69],[121.89,33.78],[121.69,34.02],[121.66,34.05],[121.64,34.08]]
              }
          ]
      });
  }, 0);
},
showView(myChart,self){
    global.httpGetWithBaseUrl(self,'/weather/all',{date:dtime(new Date().getTime()).format('YYYY-MM-DD')}).then(res=>{
      var tempGeoCoordMap = {}
      var tempData = []
      res.data.forEach(item=>{
        tempGeoCoordMap[item.city.name]=[parseFloat(item.city.lat),parseFloat(item.city.lng)]
        tempData.push({name:item.city.name,value:item.pm25})

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
            text: '江浙沪皖主要城市 PM 2.5 当日数据',
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
