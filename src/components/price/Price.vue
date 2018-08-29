

<script>
export default {
  name : 'Price',
  data () {
    return {
      option : null,
      options : []
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      this.$global.httpGetWithBaseUrl(this,'/price/all',{name:'大米'}).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>
