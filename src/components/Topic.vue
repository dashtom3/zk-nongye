<template>
  <div class="topic">
    <div id="myChart" class="map"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china.js';
import map1 from './map1.js'
import map2 from './map2.js'
import map3 from './map3.js'
import map4 from './map4.js'
import map5 from './map5.js'
import map6 from './map6.js'
// require('echarts/extension/bmap/bmap.js');
export default {
  name: 'Topic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      option:null,
      options:[map1,map2,map3,map4,map5,map6]
    }
  },
  mounted(){
    this.option = this.options[this.$route.params.id]
    this.drawLine();
  },
  methods:{
    drawLine(){

      // console.log(option)
        // option =
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        this.option.showView(myChart)
        // myChart.setOption(this.option)

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
  position:fixed;
  top:60px;
  bottom:0;
  width: 100%;
}
.map {
  width: 100%;
  height: 100%;
  /* top:60px; */


}
</style>
