<template>
  <div class="hello">
    <div id="left-chart-nav">
        <ul>
          <li v-for="item in title" v-bind:class="{active: item == topic}" @click="clickDrawer(item)">
            {{item.name}}
          </li>
        </ul>
    </div>
    <div class="right">
      <div class="block" v-for="item in data" @click="clickTopic(item)">
        <div class="title">{{item.name}}</div>
        <div><img v-bind:src="item.img" class="helimg"></div>
        <div><span class="small">日期：</span><span class="big">{{item.time}}</span></div>
      </div>
      <!-- <div class="block" @click="clickTopic(item)" v-if="topic == '农业气象数据'">
        <div class="title"><span>未来一周我省多降水过程</span></div>
        <div><span>5月21日，小满，夏季的第二个节气，小满预示着夏季闷热、潮湿的天气将要来临，需注意“防热防湿”。21日白天，全省阴天有阵雨或雷雨，</span></div>
        <div><span class="small">日期：</span><span class="big">2018-05-21</span></div>
      </div> -->
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
      title:[{name:"农业气象数据",target:"Weather"},{name:"农业交易数据",target:"Price"},{name:"农业面源污染",target:"Soil"},{name:"病虫害防治",target:"Pest"}],
      allTopics:{'农业气象数据':[{id:'0',name:'江浙沪皖每日城市天气数据',img:require('./../assets/1.jpg'),time: this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
        {id:'1',name:'江浙沪皖每日城市PM2.5数据',img:require('./../assets/2.jpg'),time:  this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
        {id:"2",name:'江浙沪皖每日城市PM10数据',img:require('./../assets/2.jpg'),time:this.$dtime(new Date().getTime()).format('YYYY-MM-DD')},
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
                          {id:'26',name:'上海农产品中心批发市场有限公司',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'27',name:'上海市江桥批发市场',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'29',name:'浙江嘉兴蔬菜批发交易市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'30',name:'浙江金华农产品批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'31',name:'浙江省绍兴市蔬菜果品批发交易市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'32',name:'浙江义乌农贸城',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'33',name:'浙江宁波市蔬菜副食品批发交易市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'34',name:'浙江省金华农产品批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'35',name:'浙江省杭州笕桥蔬菜批发交易市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'36',name:'浙江绍兴蔬菜果品批发交易中心',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'37',name:'浙江嘉善浙北果蔬菜批发交易',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'38',name:'浙江嘉兴水果市场',img:require('./../assets/8.png'),time:'2018-08-06'},
                          {id:'39',name:'江苏无锡天惠超市股份有限公司',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'40',name:'江苏苏州南环桥农副产品批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'41',name:'苏州市南环桥市场发展有限公司',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'42',name:'无锡朝阳股份有限公司农产品批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'43',name:'无锡锡澄果品批发交易市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'44',name:'南京农副产品物流中心',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'45',name:'江苏无锡朝阳市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'46',name:'江苏徐州七里沟农副产品中心',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'47',name:'安徽安庆市龙狮桥蔬菜批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'48',name:'安徽砀山农产品中心惠丰批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'49',name:'安徽亳州蔬菜批发市场',img:require('./../assets/8.png'),time:'2018-08-28'},
                          {id:'50',name:'安徽濉溪县中瑞农副产品批发市场',img:require('./../assets/8.png'),time:'2018-08-15'},
                          {id:'51',name:'安徽六安裕安区紫竹林农产品批发市场',img:require('./../assets/8.png'),time:'2018-08-14'},
                          {id:'52',name:'安徽舒城蔬菜大市场',img:require('./../assets/8.png'),time:'2018-08-12'}
                        ]
      },
      topic:null,
      data:null,
    }
  },
  created(){
    this.topic = this.title[0]
    this.data = this.allTopics[this.topic.name]
  },
  methods:{
    clickDrawer(item){
      this.topic = item
      this.data = this.allTopics[this.topic.name]
    },
    clickTopic(item){
      console.log(this.topic.name)
      let routeData = this.$router.resolve({name:this.topic.target,params:{id:item.id,name:item.name}});
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
  margin-left: 180px;
  /* width: 1200px; */
  padding-left: 20px;
}
.block {
  text-align: left;
  display: inline-block;
  width: 300px;
  height: 200px;
  border:1px solid #E4E9EC;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  padding:15px;
  cursor: pointer;
}
.helimg {
  margin-top: 5px;
  width: 300px;
  height: 140px;
}
.title {
  width: 100%;
  color:#101f28;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
</style>
