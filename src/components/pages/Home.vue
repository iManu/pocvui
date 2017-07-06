<template>
    <div class="home">
        <template v-if="loading > 0">
            Loading…
        </template>
        <template v-else>
            <h1>{{ page.H1 }}</h1>
            <h2>{{ page.H2 }}</h2>
            <p>Vuejs, SemanticUI, GraphQL/Apollo, Unit test</p>
            <router-link :to="{ name: 'Domain' }">Domaines</router-link>
            <p>
                <!--<switches v-model="enabled" :selected="enabled" theme="bootstrap" color="info" type-bold="true" textEnabled="Switch" textDisabled="Switch again"></switches>-->
            </p>
            <div class="dimension-list-item">
                <Checkbox label-title="I'm unchecked" label-checked="Okay I'm checked"></Checkbox>
                <br>
                <Checkbox label-title="Label 2"></Checkbox>
                <br>
                <Checkbox></Checkbox>
            </div>
            <button-animated text="FX" classes="positive fade" content-hidden="Faded"></button-animated>
            <ul class="ui list">
                <li v-for="user in users">
                    <ul class="ui bulleted list">
                        <li class="item">{{user.name}}</li>
                        <li class="item">{{user.email}}</li>
                        <li class="item">{{user.website}}</li>
                    </ul>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>

    import gql from 'graphql-tag';
    import Checkbox from '@/components/ui/Checkbox';
    import ButtonAnimated from '@/components/ui/ButtonAnimated';

    // GraphQL query
    const pageQuery = gql`
        query getPage($route: String!) {
            page(route: $route) {
                H1
                H2
            }
        }
    `;
    const fakeAPI = gql`
        query allUsers {
            users {
                id
                name
                email
                website
            }
        }
    `;

    export default {
        name: 'home',
        components: {
            Checkbox,
            ButtonAnimated,
        },
        data() {
            return {
                page: {},
                users: [],
                routename: this.$route.name,
                loading: 0,
            };
        },
        apollo: {
            page: {
                query: pageQuery,
                variables() {
                    return {
                        route: this.routename,
                    };
                },
            },
            users: {
                query: fakeAPI,
                loadingKey: 'loading',
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '~styles/main';

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: $online-color;
    }
</style>
