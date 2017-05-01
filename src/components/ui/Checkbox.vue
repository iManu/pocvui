<template>
    <div class="ui toggle checkbox">
        <input type="checkbox" :id="inputId" v-model="checked">
        <label :for="inputId">{{label}}</label>
    </div>
</template>

<script>
    export default {
        name: 'checkbox',
        props: {
            labelTitle: {
                default: 'Semantic Checkbox',
            },
            labelChecked: {
                default: false,
            },
        },
        data() {
            return {
                inputId: `test_${Math.random()}`,
                checked: false,
            };
        },
        computed: {
            label() {
                return (this.checked && this.labelChecked) ? this.labelChecked : this.labelTitle;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

</style>
