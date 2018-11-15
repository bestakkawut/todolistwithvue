import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
import Buefy from 'buefy'
import localstorage from 'vue-localstorage'


Vue.use(Vuex)
Vue.use(Buefy)
Vue.use(localstorage)


store.subscribe((mutations,state)=>{
  console.log('mutation ',mutations)
  console.log('state ',state)
})



new Vue({
  el: '#app',
  localstorage,
  store,
  template: '<App/>',
  components: { App }
})


