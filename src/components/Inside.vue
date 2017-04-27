<template>
  <div class="inside">
    <h2>{{ msg }}</h2>
    I'im inside
  </div>
</template>

<script>
export default {
  name: 'inside',
  data() {
    return {
      msg: 'Inception',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: bold;
  color: grey;
}

</style>
