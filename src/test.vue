<template>
  <p>{{greeting world}}</p>
</template>

<script>
  module.export = {
    data : function(){
      return {
        greeting : 'Hello'
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
p{
  margin: 100px auto;
  font-size: 18px;
  text-align: center;
}
