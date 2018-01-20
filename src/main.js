// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as VueGoogleMaps from 'vue2-google-maps'
import VuePaginate from 'vue-paginate'

import Vue from 'vue';
import App from './App';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBjvNj4UGqpUxMM4mqPfQX4ZdEKTt_nVMg',
    libraries: 'places'
  }
})
Vue.use(VuePaginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
});
