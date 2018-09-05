<template>
  <div class="hello">
    <!-- <div id="left-chart-nav">
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
    </div> -->
    <div class="index-main">
      <div class="index-title">
        <h1>农业生态公开数据</h1>
        <h2>农业生态异构、异源融合数据库</h2>
      </div>
      <div class="index-resource">
        <ul>
          <li class="index-block" v-for="item,index in title" @click="clickTheme(item,index)">
            <div class="index-img"><img v-bind:src="item.img" ></div>
            <div class="index-name">{{item.name}}</div>
            <p class="index-detail">{{item.detail}}</p>

          </li>
        </ul>
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
      topic:null,
      data:null,
    }
  },

  methods:{
    clickTheme(item,index){
      let routeData = this.$router.resolve({name:'Middle',params:{id:index}});
      window.open(routeData.href, '_blank');
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
  min-height: 200px;
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
  /* padding-top: 5px; */
  margin-top: 100px;
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
.index-block {
  text-align: center;
  display: inline-block;
  width: 250px;
  height: 240px;
  border:1px solid #E4E9EC;
  margin-right: 20px;
  margin-top: 60px;
  background-color: white;
  padding:15px;
  cursor: pointer;
  position:relative;
}
.index-img-top {
  text-align: center;
}
.index-img {
  margin-top: -50px;
  margin-left: 90px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  padding:10px;
  border-radius: 35px;
  border:1px solid #E4E9EC;
}
.index-img img{
  width: 35px;
  margin-top: 7px;
}
.index-name {
  margin-top: 40px;
  color:#22a6f5;
  font-size: 16px;
  font-weight: bold;
}
.index-detail {
  font-size: 14px;
  margin-top: 15px;
  text-align: left;
  color:#50595e;
  /* width:80%; */
  height:100px;
  word-wrap:break-word;
  word-break:break-all;
  /* box-sizing: border-box; */
}
</style>
