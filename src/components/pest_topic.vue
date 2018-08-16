<template>
  <div class='root'>
    <div class="left-bar-nav">
      <ul>
        <li class="introduce">
          {{introduce}}
        </li>
        <li v-for='item in option.data' v-bind:class="{active : item.name == currentPicture}" v-on:click='clickChoose(item.name,item.imgSrc)' v-bind:style="{'line-height' : (item.name.length>9 ? '26px':'56px')}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="showArea">
      <div class="picture">
        <img  v-bind:src='currentPictureSrc' v-on:mouseover.once='register($event)' v-on:mousewheel.prevent='scroll($event)' v-on:mousedown.prevent='drag($event)' v-bind:height="currentPageHeight+'px'" v-bind:style="{transform : 'scale('+size+')'}" alt="">
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
      introduce : '',
      currentPicture : '',
      currentPictureSrc : null,
      currentPageHeight : '',
      size : 1
    }
  },
  created(){
    this.option = this.options[this.$route.params.id-6];
    this.introduce = this.option.topic;
    this.currentPicture = this.option.data[0].name;
    this.currentPictureSrc = this.option.data[0].imgSrc;
    window.pictureHeight = document.documentElement.clientHeight-60;
    this.currentPageHeight = document.documentElement.clientHeight-60;
  },
  methods : {
    clickChoose : function(name,src){
      this.currentPicture = name;
      this.currentPictureSrc = src;
    },
    scroll : function(event){
      // console.log(event.target);
      if(event.wheelDelta==150&&this.size<=1){
        this.size+=0.08;
      }else if(event.wheelDelta==150&&this.size>1){
        this.currentPageHeight +=20;
      }else if(event.wheelDelta==-150&&this.currentPageHeight<=window.pictureHeight){
        this.size-=0.08;
        if(this.size<=0.2){
          this.size=0.2;
        }
      }else if(event.wheelDelta==-150&&this.currentPageHeight>window.pictureHeight&&this.size>1){
        this.currentPageHeight -=20;
      }
    },
    register : function(event){
      event.target.style.left = '0px';
      event.target.style.top = '0px';
    },
    drag : function(event){
      console.log(event.target);
      var that = event.target,
          startMouseX = event.clientX,
          startMouseY = event.clientY,
          startLeft = parseFloat(that.style.left),
          startTop = parseFloat(that.style.top);

      // console.log(startTop,startLeft)
      document.onmousemove = function(event_){
        // console.log(startTop - that.startoffsetTop,startLeft - that.startOffsetLeft);

        that.style.left = startLeft + (event_.clientX - startMouseX)+'px';
        that.style.top = startTop + (event_.clientY - startMouseY)+'px';
        console.log(that.style.left);
      }
      document.onmouseup = function(_event){
        this.onmousemove = null;
      }
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
    margin-top: 60px;
    margin-left: 180px;
    padding-left: 20px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
  }
  .picture{
    margin: auto;
    /* overflow: hidden; */
  }
  .picture img{
    position: relative;
  }
  .left-bar-nav{
    position: fixed;
    bottom: 0px;
    left: 0px;
    top: 60px;
    width: 180px;
    padding: 0px;
    background-color:#293c55;
    overflow-y: hidden;
    z-index: 2;
  }
  .left-bar-nav:hover{
    overflow-y: auto;
  }
  .left-bar-nav li:nth-child(1){
    padding: 10px;
    line-height: 30px !important;
    color: #fff;
    font-weight: bold;
  }
  .left-bar-nav li:nth-child(1):hover{
    background-color: #293c55 !important;
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
