<template>
  <div id="app">
    <div class="container">
      <div class="row">

        <div class="col-md-12">
          <input type="text" v-model="phrase">
        </div>

        <div class="col-md-6">
          <SearchResults :search-results="searchCountries"/>
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
      phrase: '',
      countriesEndpoint: 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json',
      countriesArray: [],
    };
  },
  created() {
    fetch(this.countriesEndpoint).then(blob => blob.json()).then(data => this.countriesArray.push(...data));
  },
  computed: {
    searchCountries: function () {
      return this.countriesArray.filter( country => {
        let foundCountry = country.name.common.toLowerCase().includes(this.phrase.toLowerCase());
        let foundCapital = country.capital.toLowerCase().includes(this.phrase.toLowerCase());

        return foundCountry || foundCapital
      })
    }
  }
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
