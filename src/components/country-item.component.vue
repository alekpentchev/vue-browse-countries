<template>
  <div v-if="Object.keys(this.searchedCountry)!=0">
    <h3>{{ country.name.common }}</h3>
    <p><strong>Capital:</strong> {{ country.capital }}</p>
    <p><strong>Region:</strong> {{ country.region }}</p>
    <p><strong>Subregion:</strong> {{ country.subregion }}</p>

    <hr>

    <gmap-map
      class="google-map"
      :center="{lat: country.latlng[0], lng: country.latlng[1]}"
      :zoom="4"
    >
      <gmap-marker
        :position="{lat: country.latlng[0], lng: country.latlng[1]}"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'CountryItem',
  props: {
    searchedCountry: Object,
    required: true
  },
  computed: {
    country: function() {
      return this.searchedCountry
    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .google-map {
    width: 100%;
    min-height: 300px;
  }
</style>
