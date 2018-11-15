<template>
  <div id="app">
    <div class="columns is-mobile is-centered">
      <div class="column is-half is-centered">
          <div id="newtodo">
            <forminput></forminput>
          </div>
          <div id="tasklist">
            <tasklist></tasklist>
          </div>
      </div>  
    </div>  
  </div>
</template>

<script>

import Forminput from './components/Newtodo/Forminput'
import Tasklist from './components/Task/Tasklist'

import { mapActions } from 'vuex'


export default {
  data (){
    return ({
      num:0
    })
  },
  components:{
    Tasklist,
    Forminput
  },
  methods:{
    ...mapActions([
      'increment'
    ])
  }
}


</script>

<style lang="scss">

@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#Newtodo{

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
