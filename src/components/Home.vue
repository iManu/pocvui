<template>
    <div class="home">
        <!-- <template v-if="loading > 0">
            Loading…
        </template>
        <template v-else> -->
            <h1>{{ msg }}</h1>
            <h2>Vuejs, SemanticUI, GraphQL/Apollo, Unit test</h2>
            <router-link :to="{ name: 'Coucou' }">Autre page</router-link>
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
        <!-- </template> -->
    </div>
</template>

<script>

    // import gql from 'graphql-tag';
    import Checkbox from '@/components/ui/Checkbox';

    // GraphQL query
    // const pagesQuery = gql`
    // query allPages {
    //     pages {
    //         H1
    //         H2
    //     }
    // }
    // `;

    export default {
        name: 'home',
        components: {
            Checkbox,
        },
        data() {
            return {
                pages: [],
                loading: 1,
                msg: 'POC menu',
            };
        },
        // apollo: {
        //     // Local state 'posts' data
        //     pages: {
        //         query: pagesQuery,
        //         loadingKey: 'loading',
        //     },
        // },
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
