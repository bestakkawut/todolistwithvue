export const add_todo = (state,param) =>{
    console.log(param)    
    state.commit('ADD_TODO',param)
}

export const toggle_todo = (state,param) => {
    state.commit('TOGGLE_TODO',param.id)
}

export const delete_todo = (state,param) => {
    state.commit('DELETE_TODO',param.todos.id)
}