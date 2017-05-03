<template>
    <div class="ui secondary pointing menu">
        <a class="item active">
            Home
        </a>
        <a class="item">
            Messages
        </a>
        <a class="item">
            Friends
        </a>
    </div>
</template>

<script>
    export default {
        name: 'menu-secondary',
        props: {
            // labelTitle: {
            //     default: 'Semantic Checkbox',
            // },
            // labelChecked: {
            //     default: false,
            // },
        },
        // data() {
        //     return {
        //         inputId: `test_${Math.random()}`,
        //         checked: false,
        //     };
        // },
        // computed: {
        //     label() {
        //         return (this.checked && this.labelChecked) ? this.labelChecked : this.labelTitle;
        //     },
        // },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

</style>
