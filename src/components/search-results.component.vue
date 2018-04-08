<template>
  <div>
    <paginate
      class="countries-list"
      name="countries"
      :per="6"
      :list="searchResults"
    >
      <div class="country-item" v-for="country in paginated('countries')" :key="country.id">
        <button class=" searched-item btn btn-dark" @click="onCountryClick(country)">
          <h4>{{ country.name.common }}</h4>
          <p>{{ country.capital[0] }}</p>
        </button>
      </div>
    </paginate>
    <paginate-links
      class="page-links"
      for="countries"
      :simple="{
        next: 'Next »',
        prev: '« Back'
      }"
      :classes= "{
        '.next': ['btn', 'page-link'],
        '.prev': ['btn', 'page-link']
      }"
    ></paginate-links>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    searchResults: Array,
    required: true
  },
  data() {
    return {
      msg: 'Look for a country or its\' capital',
      paginate: ['countries']
    };
  },
  methods: {
    onCountryClick(country) {
      this.$emit('clickedCountry' , country)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .searched-item {
    border-radius: 5px;
    margin: 0 10px 10px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .countries-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .page-links {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }
</style>

