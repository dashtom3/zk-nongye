<template>
  <div class='root'>
    <div class='chooseArea'>
      <h3>{{option.topic}}</h3>
      <el-select v-model="currentPicture" placeholder="请选择" @change='clickChoose()'>
       <el-option
         v-for="item in option.data"
         :key="item.id"
         :label="item.name"
         :value="item.id">
       </el-option>
     </el-select>
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
    clickChoose(val){
      // this.currentPicture = name;

      // this.currentPictureSrc = src;
    },
    scroll : function(event){
      var scrollTop = null;
      (event.wheelDelta==120||event.wheelDelta==150) ? scrollTop = true:scrollTop = false;
      console.log(scrollTop);
      if(scrollTop==true&&this.size<=1){
        this.size+=0.1;
      }else if(scrollTop==true&&this.size>1){
        this.currentPageHeight +=40;
      }else if(scrollTop==false&&this.currentPageHeight<=window.pictureHeight){
        this.size-=0.1;
        if(this.size<=0.2){
          this.size=0.2;
        }
      }else if(scrollTop==false&&this.currentPageHeight>window.pictureHeight&&this.size>1){
        this.currentPageHeight -=40;
      }
    },
    register : function(event){
      event.target.style.left = '0px';
      event.target.style.top = '0px';
    },
    drag : function(event){
      // console.log(event.target);
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
        // console.log(that.style.left);
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
    /* margin-top: 60px; */
    /* padding-left: 20px; */
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
  .chooseArea{
    width: auto;
    height: auto;
    position : absolute;
    top: 70px;
    left: 20px;
    z-index: 2;
  }
  .chooseArea h3{
    margin-bottom: 8px;
  }

</style>
