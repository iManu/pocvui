<template>
    <div class="ui toggle checkbox">
        <input type="checkbox" :id="inputId" v-model="isChecked">
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
                isChecked: false,
            };
        },
        computed: {
            label() {
                return (this.isChecked && this.labelChecked) ? this.labelChecked : this.labelTitle;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

</style>
