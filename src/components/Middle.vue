<template>
  <div class="hello">
    <div class="index-main">
      <div class="index-title">
        <h1>{{topic.name}}</h1>
        <h2>{{topic.detail}}</h2>
      </div>
      <div class="index-resource">
          <div class="block" v-for="item in data" @click="clickTopic(item)">
            <div class="middle-title">{{item.name}}</div>
            <div><img v-bind:src="item.img" class="helimg"></div>
            <div><span class="small">日期：</span><span class="big">{{item.time}}</span></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // title:["农业气象数据","农业交易数据","农业产品质量","农业面源污染","农业实验基地","病虫害防治","农产品认证"],
      title:[{name:"农业气象数据",img:require('./../assets/main/qx.png'),target:"Weather",detail:"涵盖了一系列气象数据，包括温度、PM2.5、PM10等专题数据"},{name:"农业交易数据",img:require('./../assets/main/jy.png'),target:"Price",detail:"涵盖了江浙沪皖农业交易市场的菜品专题数据"},{name:"农业面源污染",img:require('./../assets/main/tr.png'),target:"Soil",detail:"涵盖了江浙沪皖部分城市监测的面源污染数据"},{name:"病虫害防治",img:require('./../assets/main/bch.png'),target:"Pest",detail:"涵盖了各类病虫害的监测分析数据"}],
      allTopics:{'农业气象数据':[{id:'0',name:'江浙沪皖城市天气数据',img:require('./../assets/1.jpg'),time: this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
        {id:'1',name:'江浙沪皖城市PM2.5数据',img:require('./../assets/2.jpg'),time:  this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
        {id:"2",name:'江浙沪皖城市PM10数据',img:require('./../assets/2.jpg'),time:this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
        // {id:"3",name:'雨量流量关系图2',img:require('./../assets/4.jpg'),time:'2017-02-02'}
      ],'农业遥感数据':[{id:"4",name:'玫瑰饼图',img:require('./../assets/5.jpg'),time:'2017-02-03'},{id:"5",name:'收入支出图',img:require('./../assets/6.jpg'),time:'2017-02-04'}]
      ,'病虫害防治':[{id:'6',name:'2015年8月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2015_8_r/distribute.png'),time:'2015-8'},
                    {id:'7',name:'2015年9月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2015_9_r/distribute.png'),time:'2015-9'},
                    {id:'8',name:'2016年3月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2016_3_w/distribute.png'),time:'2016-3'},
                    {id:'9',name:'2016年4月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2016_4_w/am.png'),time:'2016-4'},
                    {id:'10',name:'2016年5月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2016_5_w/am.png'),time:'2016-5'},
                    {id:'11',name:'2016年7月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2016_7_r/cmm.png'),time:'2016-7'},
                    {id:'12',name:'2016年8月安徽市玉米病虫害',img:require('./../assets/Pest_disease/2016_8_c/bwm.png'),time:'2016-8'},
                    {id:'13',name:'2016年8月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2016_8_r/cmm.png'),time:'2016-8'},
                    {id:'14',name:'2016年9月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2016_9_r/cmm.png'),time:'2016-9'},
                    {id:'15',name:'2017年4月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2017_4_w/am.png'),time:'2017-4'},
                    {id:'16',name:'2017年5月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2017_5_w/am.png'),time:'2017-5'},
                    {id:'17',name:'2017年7月安徽市水稻病虫害',img:require('./../assets/Pest_disease/2017_7_r/cmm.png'),time:'2017-7'},
                    {id:'18',name:'2017年9月安徽市玉米病虫害',img:require('./../assets/Pest_disease/2017_9_c/lsdm.png'),time:'2017-9'},
                    {id:'19',name:'2018年3月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2018_3_w/am.png'),time:'2018-3'},
                    {id:'20',name:'2018年4月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2018_4_w/am.png'),time:'2018-4'},
                    {id:'21',name:'2018年5月安徽市小麦病虫害',img:require('./../assets/Pest_disease/2018_5_w/am.png'),time:'2018-5'}
                  ]
          ,'农业面源污染':[
                          {id:"22",name:'2017年14期土壤墒情简报',img:require('./../assets/7.jpg'),time:'2017-04-12'},
                          {id:"23",name:'2017年42期土壤墒情简报',img:require('./../assets/7.jpg'),time:'2017-11-10'},
                          {id:"24",name:'2017年47期土壤墒情简报',img:require('./../assets/7.jpg'),time:'2017-12-18'},
                          {id:"25",name:'2017年48期土壤墒情简报',img:require('./../assets/7.jpg'),time:'2017-12-25'}
                        ]
          ,'农业交易数据':[
                          {id:'26',name:'上海农产品中心批发市场有限公司六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'27',name:'上海市江桥批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'29',name:'浙江嘉兴蔬菜批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'30',name:'浙江金华农产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'31',name:'浙江省绍兴市蔬菜果品批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'32',name:'浙江义乌农贸城六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'33',name:'浙江宁波市蔬菜副食品批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'34',name:'浙江省金华农产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'35',name:'浙江省杭州笕桥蔬菜批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'36',name:'浙江绍兴蔬菜果品批发交易中心六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'37',name:'浙江嘉善浙北果蔬菜批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'38',name:'浙江嘉兴水果市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-06'},
                          {id:'39',name:'江苏无锡天惠超市股份有限公司六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'40',name:'江苏苏州南环桥农副产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'41',name:'苏州市南环桥市场发展有限公司六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'42',name:'无锡朝阳股份有限公司农产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'43',name:'无锡锡澄果品批发交易市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'44',name:'南京农副产品物流中心六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'45',name:'江苏无锡朝阳市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'46',name:'江苏徐州七里沟农副产品中心六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'47',name:'安徽安庆市龙狮桥蔬菜批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'48',name:'安徽砀山农产品中心惠丰批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'49',name:'安徽亳州蔬菜批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'50',name:'安徽濉溪县中瑞农副产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'51',name:'安徽六安裕安区紫竹林农产品批发市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-14'},
                          {id:'52',name:'安徽舒城蔬菜大市场六到八月份农产品交易数据',img:require('./../assets/8.png'),time:'2018-08-12'}
                        ]
      },
      topic:null,
      data:null,
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      this.topic = this.title[this.$route.params.id]
      if(this.$route.params.id == 0){ // 气象数据
        var tempRes = []
        for(var i=0;i<7;i++){
          var tempDate = this.$dtime(new Date().getTime()-1000*60*60*24*i).format('YYYY-MM-DD')
           tempRes.push({id:'0',name:'江浙沪皖城市天气数据_'+tempDate,img:require('./../assets/1.jpg'),time: tempDate})
           tempRes.push({id:'1',name:'江浙沪皖城市PM2.5数据_'+tempDate,img:require('./../assets/2.jpg'),time:  tempDate})
           tempRes.push({id:"2",name:'江浙沪皖城市PM10数据_'+tempDate,img:require('./../assets/2.jpg'),time: tempDate})
        }
        this.allTopics['农业气象数据']=tempRes
      }
      this.data = this.allTopics[this.topic.name]
    },
    clickDrawer(item){
      this.topic = item
      this.data = this.allTopics[this.topic.name]
    },
    clickTopic(item){
      console.log(this.topic.name)
      let routeData = this.$router.resolve({name:this.topic.target,params:{id:item.id,name:item.name,time:item.time}});
      window.open(routeData.href, '_blank');
      // this.$router.push()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
}
#left-chart-nav{
  position:fixed;
  top:60px;
  bottom:0;
  left:0;
  /* padding-top:51px; */
  width:180px;
  background-color:#293c55;
  overflow-y:hidden;
}
#left-chart-nav:hover{
  overflow-y:auto;
}
#left-chart-nav li:hover{
  background-color: #162436;
}
#left-chart-nav .active{
  background-color: #e43c59;
  color:white;
}
#left-chart-nav li{
  color:#ccc;
  height:40px;
  /* padding:0px 0px 0px 0px; */
  padding:10px 0px 0px 20px;
  -webkit-transition:0.5s;
  transition:0.5s;
  cursor: pointer;
  /* list-style-type:none; */
}
#left-chart-nav li a{color:#ccc;position:relative;display:block;-webkit-transition:0.5s;transition:0.5s}
.right {
  text-align: left;
  /* margin-left: 180px; */
  /* width: 1200px; */
  padding-left: 20px;
}
.block {
  text-align: left;
  display: inline-block;
  width: 250px;
  height: 220px;
  border:1px solid #E4E9EC;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  padding:15px;
  cursor: pointer;
}
.helimg {
  margin-top: 5px;
  width: 250px;
  height: 140px;
}
.middle-title {
  width: 100%;
  color:#22a6f5;
  font-size: 16px;
  height: 50px;
  font-weight: bold;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.small{
  color:#999;
  font-size:13px;
}
.big {
  color:#666;
  font-size:13px;
}
/* .block div {
  display: block;
} */




.index-main {
  margin: auto;
  width: 1024px;
  text-align: center;
  margin-top: 100px;
  /* padding-top: 5px; */
}
.index-title h1{
  font-size: 30px;
  color:#101f28;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: -20px;

  /* line-height: 140%; */
}
.index-title h2 {
  margin-top: 0px;
  font-size: 16px;
  color:#81878c;
}
.index-resource {
  text-align: left;
  margin-left:74px;
  margin-bottom: 30px;
}
.index-resource ul {
  list-style: none;
}

</style>
