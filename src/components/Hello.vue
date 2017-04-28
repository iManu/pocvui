<!-- from https://github.com/drewjbartlett/vue-switches -->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Poc</h2>
        <router-link :to="{ name: 'Coucou' }">coucou</router-link>
        <p>
            Switch <switches v-model="enabled" :selected="enabled" theme="bootstrap" color="info"></switches>
        </p>
    </div>
</template>

<script>

import Switches from '@/components/Switches';

export default {
    name: 'hello',
    components: {
        Switches,
    },
    data() {
     /*   var model = new falcor.Model({source: new falcor.HttpDataSource('../data/model.json') });
    model.get("greeting").then(function(response) {
          console.log(response.json.greeting);
        });*/
        return {
            msg: 'Hello world',
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '~styles/main.scss';

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
