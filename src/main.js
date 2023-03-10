import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', 
  },
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
