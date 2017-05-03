<template>
    <div class="ui animated button" :class="classes" tabindex="0">
        <div class="visible content">{{text}}</div>
        <div class="hidden content">
            <template v-if="icon">
                <i class="icon" :class="[icon.direction, icon.name]"></i>
            </template>
            <template v-else-if="contentHidden">
                {{contentHidden}}
            </template>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'buttonAnimated',
        props: {
            text: {
                default: 'Button text',
            },
            classes: {
                default: '',
            },
            icon: {
                default: false,
            },
            contentHidden: {
                default: false,
            },
        },
        data() {
            return {
                // iconDirection: this.icon.direction,
                // iconName: this.icon.name,
            };
        },
        computed: {
            // hiddenContent() {
            //     let output = '';
            //     if (this.icon) {
            //         output = '<i class="`${this.icon.direction} ${this.icon.name} icon"></i>';
            //     } else if (this.contentHidden) {
            //         output = this.contentHidden;
            //     }
            //     return output;
            // },
        },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

</style>
