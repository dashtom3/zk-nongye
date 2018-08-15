<template>
  <div class='root'>
    <div class="left-bar-nav">
      <ul>
        <li v-for='item in option.data' v-bind:class="{active : item.name == currentPicture}" v-on:click='clickChoose(item.name,item.imgSrc)' v-bind:style="{'line-height' : (item.name.length>9 ? '26px':'56px')}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="showArea">
      <div class="picture">
        <img  v-bind:src='currentPictureSrc'  onkeypress="" v-bind:height="currentPageHeight+'px'" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import pest_map1 from './pest_map1.js'
import pest_map2 from './pest_map2.js'
import pest_map3 from './pest_map3.js'
import pest_map4 from './pest_map4.js'
import pest_map5 from './pest_map5.js'
import pest_map6 from './pest_map6.js'
import pest_map7 from './pest_map7.js'
import pest_map8 from './pest_map8.js'
import pest_map9 from './pest_map9.js'
import pest_map10 from './pest_map10.js'
import pest_map11 from './pest_map11.js'
import pest_map12 from './pest_map12.js'
import pest_map13 from './pest_map13.js'
import pest_map14 from './pest_map14.js'
import pest_map15 from './pest_map15.js'
import pest_map16 from './pest_map16.js'
export default {
  name: 'pest_topic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      option:null,
      options:[pest_map1,pest_map2,pest_map3,pest_map4,pest_map5,pest_map6,pest_map7,pest_map8,pest_map9,pest_map10,pest_map11,pest_map12,pest_map13,pest_map14,pest_map15,pest_map16],
      currentPicture : '',
      currentPictureSrc : null,
      currentPageHeight : ''
    }
  },
  created(){
    this.option = this.options[this.$route.params.id-6];
    this.currentPicture = this.option.data[0].name;
    this.currentPictureSrc = this.option.data[0].imgSrc;
    this.currentPageHeight = document.documentElement.clientHeight-60;
  },
  methods : {
    clickChoose : function(name,src){
      this.currentPicture = name;
      this.currentPictureSrc = src;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .showArea{
    margin-left: 180px;
    padding-left: 20px;
    background-color: #dfdfdf;
    text-align: center;
  }
  .picture{
    margin: auto;
  }
  .left-bar-nav{
    position: fixed;
    bottom: 0px;
    left: 0px;
    top: 60px;
    width: 180px;
    padding: 15px 0px;
    background-color:#293c55;
    overflow-y: hidden;
  }
  .left-bar-nav:hover{
    overflow-y: auto;
  }
  .left-bar-nav li{
    vertical-align: middle;
    list-style-type: none;
    color:#ccc;
    height:56px;
    line-height: 23px;
    padding: 0px 10px 0px 10px;
    font-size: 17px;
    -webkit-transition:0.5s;
    transition:0.5s;
    cursor: pointer;
  }
  .left-bar-nav li.active{
    background-color: #e43c59;
    color:white;
  }
  .left-bar-nav li:hover{
    background-color: #162436;
  }


</style>
