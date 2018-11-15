export const ADD_TODO = (state,param) => {
    console.log('mutation ADD_TODO',param)
    console.log('state ADD_TODO',state);
    state.todos.push(param)
}

export const TOGGLE_TODO = (state,id) => {
    console.log('toggle',id)
    state.todos.map((todo,index)=>{
        if(index === id){
            return state.todos[index].complete = !todo.complete 
        }
        return todo
    })
}