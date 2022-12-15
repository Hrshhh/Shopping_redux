export const addTodo = (shop) => {
    return{
        type: "ADD_TODO",
        payload: {
            data: shop
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        payload: {
            id: id
        }
    }
}
