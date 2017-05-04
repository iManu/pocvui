<template>
    <div class="link-list">
        <template v-if="loading > 0">
            Loading…
        </template>
        <template v-else>
            <div class="ui secondary vertical pointing menu">
                <router-link v-for="link in links" :key="link.id" class="item" :to="{ name: link.router }" exact>{{ link.title }}</router-link>
            </div>
        </template>
    </div>
</template>

<script>
    import gql from 'graphql-tag';

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

    export default {
        name: 'link-list',
        data() {
            return {
                links: [],
                loading: 0,
            };
        },
        apollo: {
            // Local state 'links' data
            links: {
                query: linksQuery,
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

</style>
