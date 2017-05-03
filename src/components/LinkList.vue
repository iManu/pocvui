<template>
    <div class="link-list">
        <template v-if="loading > 0">
            Loading…
        </template>
        <template v-else>
            <button-animated text="Commander" classes="primary" v-bind:icon="{direction:'right', name:'arrow'}"></button-animated>
            <ul>
                <li v-for="link in links" :key="link.id">
                    <router-link :to="{ name: link.router }">{{ link.title }}</router-link>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import ButtonAnimated from '@/components/ui/ButtonAnimated';

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
        components: {
            ButtonAnimated,
        },
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

