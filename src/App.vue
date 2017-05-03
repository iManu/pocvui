<template>
    <div id="app">
        <div class="ui menu attached">
            <div class="header item">Brand</div>
            <div class="right menu">
                <div class="item">
                    <div class="ui transparent icon input">
                        <i class="search icon"></i>
                        <input type="text" placeholder="Search">
                    </div>
                </div>
                <a class="item">Link</a>
            </div>
        </div>
        <div class="ui grid">
            <div class="two wide column">
                <img src="~imgs/brand/logo.png" class="kv-img">
                <LinkList></LinkList>
            </div>
            <div class="fourteen wide column">
                <router-view></router-view>
            </div>
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
