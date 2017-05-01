<template>
    <div id="app" class="ui grid container">
        <div class="two wide column">
            <img src="~imgs/brand/onlinelogoback.svg" class="kv-img">
            <LinkList></LinkList>
        </div>
        <div class="fourteen wide column">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LinkList from '@/components/LinkList';

    export default {
        name: 'app',
        components: {
            LinkList,
        },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

    #app {

        color: $primary-color;
    }
    .kv-img {
        width: 40px;
    }
</style>
