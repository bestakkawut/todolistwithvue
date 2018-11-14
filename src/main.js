import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'


Vue.use(Vuex)
Vue.use(Buefy)

// const store = new Vuex.Store({
//   state:[{
//     title:"",
//     msg:"",
//     complete:false
//   }],
//   mutations:{
//     ADD_TODO(state,payload){
//       state:[{
//         ...state,
//         title:payload.title,
//         msg:payload.msg
//       }]
//     },
//     TOGGLE_TODO(state,payload){
//       state:[{
//         ...state,
//         complete:!complete
//       }]
//     }
//   }
// })

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    INCREMENT(state){
      state.count++
    }
  }
})



store.subscribe((mutations,state)=>{
  console.log('mutation ',mutations)
  console.log('state ',state)
})

store.commit('INCREMENT')


new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})


