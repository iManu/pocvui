<template>
    <div class="inside">
        <h2>{{ msg }}</h2>
        I'm a component child
    </div>
</template>

<script>
export default {
    name: 'inside',
    data() {
        return {
            msg: 'Inception',
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '~styles/main';

    .inside {
        border: 1px solid $online-color;
        padding: 10px;
        margin: 10px 0;
    }
    h2 {
        font-weight: bold;
        color: grey;
    }

</style>
