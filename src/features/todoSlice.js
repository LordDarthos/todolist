import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        toggleDone: (state, action) => {
            const index = state.todoList.findIndex(
                (todo) => todo.id === action.payload.id
                
            )
            console.log(state)
            state.todoList[index].done = action.payload.done
        },
        deleteTodo: (state, action) => {
            const values = state.todoList.filter((todo) => todo.id !== action.payload.id)
            state.todoList = values
        }
    }
});

export const { addTodo, toggleDone, deleteTodo } = todoSlice.actions


export const selectTodoList  = state => state.todos.todoList
export const selectDoneTodos = state => state.todos.todoList.filter((todo) => todo.done === true)
export default todoSlice.reducer