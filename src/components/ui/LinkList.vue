<template>
    <div class="link-list">
        <template v-if="loading > 0">
            Loading…
        </template>
        <template v-else>
            <div class="ui secondary vertical pointing menu" :class="color">

                <router-link v-for="link in links" :key="link.id" class="item" :to="{ name: link.router }" exact>{{ link.title }}</router-link>
            </div>
        </template>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import Checkbox from '@/components/ui/Checkbox';

    // GraphQL query
    const linksQuery = gql`
        query allLinks {
            links {
                id
                title
                href
                router
            }
        }
    `;
    const menusQuery = gql`
        query allMenus {
            menus {
                id
                color
            }
        }
    `;

    export default {
        name: 'link-list',
        components: {
            Checkbox,
        },
        props: {
            menuId: {
                default: 1,
            },
        },
        computed: {
            color() {
                let color = 'salmon';
                this.menus.forEach((menu) => {
                    if (menu.id.toString() === this.menuId.toString()) {
                        color = menu.color;
                    }
                });
                return color;
            },
        },
        data() {
            return {
                links: [],
                menus: [],
                loading: 0,
            };
        },
        apollo: {
            // Local state 'links' data
            links: {
                query: linksQuery,
                loadingKey: 'loading',
            },
            menus: {
                query: menusQuery,
                loadingKey: 'loading',
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '~styles/main';

    a {
        display: block;
        width: 100%;
    }
    .blue {
        color: blue;
    }
    .red {
        color: red;
    }

</style>
