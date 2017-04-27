<template>
  <div id="app">
    <img src="./assets/logo.png" class="kv-img">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/main.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primary-color; //#2c3e50;
    margin-top: 60px;
  }
  .kv-img {
    width: 30px;
  }
</style>
