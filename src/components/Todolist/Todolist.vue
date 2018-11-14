<template>
    <ul>
        <li v-for="todo in todos"  class="column has-text-left">
            <h1 class="title is-size-4">
                <input type="checkbox" name="" id="">
                    {{todo.title}}</h1>
            <p class="subtitle">{{todo.msg}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name:"todolist",
    data () { 
        return{
            todos:[
                {
                    title:'test1',
                    msg:'this is test1 message',
                    complete:false
                },
                {
                    title:'test2',
                    msg:'this is test2 message',
                    complete:false
                },
                {
                    title:'test3',
                    msg: 'this is test3 message',
                    complete:true
                }
            ]
        }
    }
}
</script>
