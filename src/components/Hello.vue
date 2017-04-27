<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Poc</h2>
        <router-link :to="{ name: 'Coucou' }">coucou</router-link>

    </div>
</template>

<script>

export default {
    name: 'hello',
    data() {
     /*   var model = new falcor.Model({source: new falcor.HttpDataSource('../data/model.json') });
    model.get("greeting").then(function(response) {
          console.log(response.json.greeting);
        });*/
        return {
            msg: 'Welcome everybody',
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
