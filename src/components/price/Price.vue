<template>
  <div class="topic">
    <div class='choose'>
      <el-select v-model="dateSelected" placeholder="请选择" @change="selectDate()">
        <el-option
          v-for="item in dateSelect"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div id='myChart' class='map'></div>
  </div>
</template>

<script>
import 'echarts';
export default {
  name : 'Price',
  data () {
    return {
      data : null,
      dateSelected:2,
      dateSelect:[{label:'六月份',value:0},{label:'七月份',value:1},{label:'八月份',value:2}],
      priceArgs:{
        place:null,
        fromDate:'2018-08-01',
        toDate:'2018-08-31',
      },
      option : {
          title: {
              text: ''
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
            left:350,
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              top: '15%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: []
          },
          yAxis: {
              type: 'value'
          },
          series:[]
      }
    }
  },

  created(){
    this.priceArgs.place = this.$route.params.name;
    this.option.title.text = this.priceArgs.place
    this.getData();
    // this.drawLine();
  },
  mounted(){

  },
  methods:{
    drawLine(){
      console.log(this.option)
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption(this.option)
    },
    selectDate(){
      console.log(this.dateSelected)
      switch (this.dateSelected) {
        case 0:
          this.priceArgs.fromDate = '2018-06-01'
          this.priceArgs.toDate = '2018-06-30'
          break;
        case 1:
          this.priceArgs.fromDate = '2018-07-01'
          this.priceArgs.toDate = '2018-07-31'
          break;
        case 2:
          this.priceArgs.fromDate = '2018-08-01'
          this.priceArgs.toDate = '2018-08-31'
          break;
        default:
          break;
      }
      this.getData()
    },
    getData(){
      this.$global.httpGetWithBaseUrl(this,'price/all',this.priceArgs).then(res=>{
        console.log(res);
        this.analyseDate();
        this.analyseData(res.data);
        this.drawLine();
      });
    },

    analyseDate(){
      const tempDate = this.priceArgs.fromDate.split('-')
      const tempDate2 = this.priceArgs.toDate.split('-')
      var tempRes = []
      for(var i=parseInt(tempDate[2]);i<=parseInt(tempDate2[2]);i++){
        tempRes.push(tempDate[0]+'-'+tempDate[1]+"-"+this.$global.prefixInteger(i,2))
      }
      console.log(tempRes)
      this.option.xAxis.data = tempRes
       //this.$dtime(this.$dtime(this.priceArgs.fromDate).fromat('x')+1000*60*60*24).format('YYYY-MM-DD')
    },
    analyseData(data){
      var tempData = {}
      data.forEach(item=>{
        if(!tempData[item.name]){
          tempData[item.name] = new Array(this.option.xAxis.data.length)
        }
        tempData[item.name][parseInt(item.date.split('-')[2])]=parseFloat(item.price)
      })
      console.log(tempData)
      var tempLegend = []
      var tempLegendSelected = {}
      this.data = []
      var k=0;
      for(var key in tempData){
        this.data.push({
          name:key,
          type:"line",
          data:tempData[key]
        })
        tempLegend.push(key)
        if(k<10){
          tempLegendSelected[key]= true
        }else {
          tempLegendSelected[key]=false
        }
        k++
      }
      console.log(this.data)
      console.log(tempLegendSelected)
      this.option.legend.data = tempLegend
      this.option.legend.selected = tempLegendSelected
      this.option.series = this.data
    }
  }
}
</script>
<style scoped>
.topic {
  position:fixed;
  top:60px;
  bottom:0;
  width: 100%;
}
.map {
  width: 100%;
  height: 100%;
}
.choose {
  position: absolute;
  top: 35px;
  left: 5px;
  z-index: 2;
}
</style>
