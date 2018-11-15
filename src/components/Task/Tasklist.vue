<template>
    <section>
        <div>
            <h1>Tasklist</h1>
            <todolist></todolist>
        </div>
        <div>
            <h1>Complete</h1>            
            <todolist></todolist>
        </div>
        
    </section>
    
</template>

<script>

import todolist from '../Todolist/Todolist'
import { mapState } from 'vuex'


export default {
    name:'Tasklist',
    components:{
        todolist
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    }
}
</script>
