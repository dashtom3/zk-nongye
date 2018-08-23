<template>
  <div class="topic">
    <h2>{{title}}</h2>
    <div v-for="(item,index) in soils" :id="`myChart${index}`" class="map" ></div>
    <!-- <img src="./../assets/huangtu2.png" alt=""> -->
  </div>
</template>

<script>
import 'echarts/map/js/china.js'
import map7 from './map7.js'
// import axios from 'axios'
// import soil from "../../static/soil_2017_14.json"
// require('echarts/extension/bmap/bmap.js');
export default {
  name: 'Topic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      map:map7,
      routeID:["22","23","24","25"],
      soils:null,
      num:null,
      title:null,
      titles:["安徽省蒙城县2017年4月12日墒情监测数据一览","安徽省蒙城县2017年11月10日墒情监测数据一览",
      "安徽省蒙城县2017年12月18日墒情监测数据一览","安徽省蒙城县2017年12月25日墒情监测数据一览"],
    }
  },
  created(){
    this.num = this.routeID.indexOf(this.$route.params.id)
    this.soils = map7.periods[this.num]
    this.title = this.titles[this.num]
      //  this.getJson();
      this.drawLine();
       console.log(typeof(this.num));
  },

  methods:{
      // getJson(){
      //  axios.get("../static/soil_2017_"+"14"+".json").then((res)=>{
      //   this.soils = res.data;
      //   console.log(this.soils)
      //   this.drawLine();
      //  })
      // },
    drawLine(){
      let num = this.num;
        // 基于准备好的dom，初始化echarts实例
        this.$nextTick(()=>{
          this.map.periods[num].forEach((item,index)=>{
            this.map.option.title.text = item.place + '(' + item.type + ')' 
            this.map.option.xAxis.data = item.deep
            this.map.option.legend.data = item.legend
            this.map.option.title.subtext = item.period
           this.map.option.series = [
              {
                name:'自然含水量',
                type:'line',
                data:item.nature
              },
              {
                  name:item.legend[1],
                  type:'line',
                  data:item.last
              },
              {
                  name:item.legend[2],
                  type:'line',
                  data:item.current
              },
           ],
           this.map.option.tooltip.formatter=function (params,ticket,callback) {
            var res = '土层深度 : ' + params[0].name + '(cm)';
              for (var i = 0; i < params.length; i++) {
                  res += '<br/>' + params[i].seriesName + ' : ' + params[i].value + '%';
              }
            res += '<br/>' + '墒情评价 : ' + item.evaluation[params[0].dataIndex]
            return res ;
            }
           var temp = this.$echarts.init(document.getElementById("myChart" + index))
           temp.setOption(this.map.option)
          })
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* *{
  padding: 0;
} */
.topic {
  text-align:center;
  /* position:fixed; */
  /* top:60px; */
  width: 1800px;
  padding-top:1%;
  /* background-color: blanchedalmond */
}
.map {
  width: 450px;
  height: 310px;
  /* top:60px;
  margin:auto; */
  float: left;
  left: 4%;
  margin-top: 20px;
  margin-bottom:50px;
  /* background-color: aliceblue */
}
</style>
