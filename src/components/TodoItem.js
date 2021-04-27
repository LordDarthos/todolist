import React from 'react'
import './TodoItem.css'

import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from '../features/todoSlice'

const TodoItem = ({name, done, id}) => {
    
    const dispatch = useDispatch()

    const handleToggleDone = (e) => {
        dispatch(
            toggleDone({
                id: id,
                done: !done
            })
        )
    }

    const handleDeleteTodo = (e) => {
        e.preventDefault()
        dispatch(
            deleteTodo({
                id: id
            })
        )
    }

    return (
 
        <div className='todoItem'>

            <Checkbox
                checked={done}
                color="primary"
                onClick={handleToggleDone}
                inputProps={{ 'aria-label': 'secondary-checkbox'}}
                >
            </Checkbox>
            <p className={done ? 'todoItem--done' : undefined}>{name}</p>
            <button onClick={handleDeleteTodo} >Delete!</button>
        </div>
    )
}

export default TodoItem