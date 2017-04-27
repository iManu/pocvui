<template>
  <div class="coucou">
    <h1>{{ msg }}</h1>

    <router-link :to="{ name: 'Hello' }">home</router-link>
    <Inside></Inside>
  </div>
</template>

<script>

import Inside from '@/components/Inside';

export default {
    name: 'coucou',
    components: {
        Inside,
    },
    data() {
        return {
            msg: 'autre page',
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
