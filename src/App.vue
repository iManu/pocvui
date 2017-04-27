<template>
    <div id="app">
        <img src="./assets/img/brand/onlinelogoback.svg" class="kv-img">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style lang="scss" scoped>
    @import '~styles/main.scss';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $primary-color;
        margin-top: 60px;
    }
    .kv-img {
        width: 80px;
    }
</style>
