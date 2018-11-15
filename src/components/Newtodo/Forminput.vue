<template>
    <section>
        <div>
            <b-field>
                <b-input placeholder="Title" v-model="title"></b-input>
            </b-field>
            <b-field>
                <b-input v-model="message" maxlength="200" type="textarea" placeholder="Message"></b-input>
            </b-field>
            <b-field class="has-text-left">
                <button class="button block" @click="addTodos">Add</button>
            </b-field>
        </div>
    </section>
</template>

<script>


export default {
    name:'Forminput',
    data () {
        return {
            title:'',
            message:''
        }
    },
    methods:{
        addTodos(){
            this.$store.dispatch('add_todo',{
                title:this.title,
                msg:this.message,
                complete:false
            })
        }
    }
}
</script>

<style lang="sass" scoped>

</style>

