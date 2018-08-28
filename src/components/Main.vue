<template>
  <div class="hello">
    <div id="left-chart-nav">
        <ul>
          <li v-for="item in title" v-bind:class="{active: item == topic}" @click="clickDrawer(item)">
            {{item}}
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
      title:["农业气象数据","农业遥感数据","农业交易数据","农业产品质量","农业面源污染","农业实验基地","病虫害防治","农产品认证"],
      allTopics:{'农业气象数据':[{id:'0',name:'全国重要城市空气质量',img:require('./../assets/1.jpg'),time:'2017-12-31'},
        {id:'1',name:'全国空气质量PM2.5',img:require('./../assets/2.jpg'),time:'2018-01-01'},{id:"2",name:'雨量流量关系图',img:require('./../assets/3.jpg'),time:'2008-05-04'},
        {id:"3",name:'雨量流量关系图2',img:require('./../assets/4.jpg'),time:'2017-02-02'}
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
      },
      topic:null,
      data:null,
    }
  },
  created(){
    this.topic = this.title[0]
    this.data = this.allTopics[this.topic]

  },
  methods:{
    clickDrawer(item){
      this.topic = item
      this.data = this.allTopics[this.topic]
    },
    clickTopic(item){
      var target = '';
      item.id <= 6 ? target = 'Weather' : target = 'Pest';

      if(item.id == 22 || item.id == 23 || item.id == 24 || item.id == 25 ) target = 'Soil';
      let routeData = this.$router.resolve({name:target,params:{id:item.id}});
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
  color:#101f28;
  font-size: 20px;
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
