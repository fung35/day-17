<template><div>
  <Shuru></Shuru>
  <div>{{ $store.getters.showBmi }}</div>
  <div>{{ $store.getters.showHealth }}</div></div>
</template>

<script>
import Shuru from './components/shuru.vue'
export default {
  name: "App",
  components: {
    Shuru
  }
}
</script>

<style scoped>

</style>
