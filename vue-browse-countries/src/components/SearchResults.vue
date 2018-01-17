<template>
  <div>
    <div v-for="country in searchResults" :key="country.id">
      <h4>{{ country.name.common }}</h4>
      <p>{{ country.capital }}</p>
    </div>
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
