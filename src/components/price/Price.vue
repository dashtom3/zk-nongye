<script>
var request = require('request'),
    url = 'http://localhost:8001/data/price/all',
    container = [];

request.get({
  url : url,
  encoding : null
},function(err,response,body){
  if(!err&&response.statusCode==200){
    console.log(body);
  }else{
    console.log('error',err);
    console.log('Code',response.statusCode);
  }
})
</script>
