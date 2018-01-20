<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Search for a country or its' capital</h2>
          <input class="col-md-12 input-group-text" type="text" v-model="phrase">
          <hr>
        </div>


        <div class="col-md-6">
          <SearchResults @clickedCountry="getClickedCountry" :search-results="searchCountries"/>
        </div>

        <div class="col-md-6">
          <CountryItem :searchedCountry="this.clickedCountry"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResults from './components/search-results.component';
import CountryItem from './components/country-item.component'

export default {
  name: 'App',
  components: {
    SearchResults,
    CountryItem
  },
  data() {
    return {
      phrase: '',
      countriesEndpoint: 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json',
      countriesArray: [],
      clickedCountry: {}
    };
  },
  computed: {
    searchCountries: function () {
      return this.countriesArray.filter( country => {
        let foundCountry = country.name.common.toLowerCase().includes(this.phrase.toLowerCase());
        let foundCapital = country.capital.toLowerCase().includes(this.phrase.toLowerCase());

        return foundCountry || foundCapital
      })
    }
  },
  methods: {
    async fetchCountriesData(endpoint) {
      let countriesData = await fetch(endpoint).then(blob => blob.json())
      this.countriesArray.push(...countriesData)
    },

    getClickedCountry(country) {
      this.clickedCountry = country
    }
  },
  created() {
    this.fetchCountriesData(this.countriesEndpoint)
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
