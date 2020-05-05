export function addTodo(text){
    return {
        type: 'ADD_TODO',
        payload: {
            id: Math.random(),
            name: text
        }
    }
}