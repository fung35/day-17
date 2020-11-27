<template>
<div><input type="text" id="height">
  <input type="text" id="weight">
  <button v-on:click="goTest">查看我的健康值</button>
</div>

</template>

<script>
export default {
  name: "shuru",
  methods: {
    goTest(){
      let hei =document.querySelector('#height').value
      let wei =document.querySelector('#weight').value
      let bmi = wei/(hei*hei)
      if(bmi <18){
        var health = '偏瘦'
      }
      else if(bmi <24){
        var health = '正常'
      }
      else{
        var health = '偏胖'
      }
      this.$store.commit("getBmi",bmi)
      this.$store.commit("getHealth",health)
    }
  }
}
</script>

<style scoped>

</style>
