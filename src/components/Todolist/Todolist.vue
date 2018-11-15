<template>
    <ul>
        <li v-for="(todo,index) in todos" :key="index" class="column has-text-left">
            <h1 class="title is-size-4">
                <input type="checkbox" @change="toggleComplete(index)">
                 {{todo.title}}
            </h1>
            <p class="subtitle">{{todo.msg}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name:"todolist",
    computed:{
        todos(){
            return this.$store.state.todos
        }
    },
    methods:{
        toggleComplete(index){
            this.$store.dispatch('toggle_todo',{id:index})
        }
    }
}
</script>
