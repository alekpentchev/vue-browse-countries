<template>
  <div>
    <span>{{ searchResults }}</span>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: ['searchResults'],
  data() {
    return {
      msg: 'Look for a country or its\' capital',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
