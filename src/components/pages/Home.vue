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
                <p>
                    <Checkbox label-title="I'm unchecked" label-checked="Okay I'm checked"></Checkbox>
                    <br>
                    <Checkbox label-title="Label 2"></Checkbox>
                    <br>
                    <Checkbox></Checkbox>

                </p>
            </div>
            <div class="ui divider"></div>
            <p>
                <button-animated text="FX" classes="positive fade" content-hidden="Faded"></button-animated>
            </p>
            <div class="ui divider"></div>
            <div class="ui list">
                <div class="item" v-for="(user, index) in users">
                    <img class="ui avatar image" :src="'http://lorempixel.com/84/84/people/' + (index + 1)">
                    <div class="content">
                        <a class="header">{{user.name}}</a>
                        <div class="description">{{user.email}} <a><b>Website:</b></a> {{user.website}}</div>
                    </div>
                </div>
            </div>
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
