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

export default {
    name:'Tasklist',
    components:{
        todolist
    }
}
</script>
