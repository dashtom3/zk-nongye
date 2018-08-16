<template>
  <div id="app">
    <div class="header">
      <div class="title"><img src="./assets/title.png"></div>
      <span class="time">{{time}}</span>
      <!-- <img src='./assets/1.jpg'> -->
    </div>

    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      // src:'./assets/1.jpg',
      time:this.$global.getDate(new Date())
    }
  },
  created(){
    setInterval(()=>{
      this.time = this.$global.getDate(new Date())
    },1000)
  }
}
</script>

<style>
body{
  background-color: #F4F4F4;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* height: 100%; */
}

.header {
  width: 100%;
  background-color: #0C1E32;
  height: 60px;
  padding-left: 10px;
  position: fixed;
  top: 0;
  z-index: 2;
  /* padding-top: 20px; */
}
.title {
  float: left;
}
.time {
  color: #dddddd;
  margin-left: 10px;
  font-size: 12px;
  margin-top: 24px;
  float: left;
}
.left {
  /* float: left; */
  height: 100vh;
  width: 200px;
}
.leftbtn {
  float: left;
  padding-top: 50%;
  width:15px;
  height: 100%;
  background-color: black;
  color:#65A9C5;
  font-size: 20px;
}
.right {
  /* height: 100%; */
  margin-top: 60px;
}
body {
  margin: 0px;
}
</style>
