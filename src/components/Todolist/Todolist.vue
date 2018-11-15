<template>
    <ul>
        <li v-for="(todo,index) in todos" :key="index" class="column has-text-left">
            <div class="columns">
                <div class="column">
                    <h1 class="title is-size-4">
                        <input type="checkbox" @change="toggleComplete(index)">
                        {{todo.title}}
                    </h1>
                    <p class="subtitle">{{todo.msg}}</p>
                </div>
                <div class="column has-text-right">
                    <button class="button">X</button>
                </div>
            </div>
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
