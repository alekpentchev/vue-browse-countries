<template>
  <div id="app">
    <div class="container">
      <div class="row">

        <div class="col-md-12">
          <input type="text" v-model="msg">
        </div>

        <div class="col-md-6">
          <SearchResults :search-results="msg"/>
        </div>

        <div class="col-md-6">
          <span>Some example content</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SearchResults from './components/SearchResults';

export default {
  name: 'App',
  components: {
    SearchResults,
  },
  data() {
    return {
      msg: 'Search for a country',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
