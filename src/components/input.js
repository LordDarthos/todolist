import React, { useState } from 'react';
import './Input.css';

import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice'

const Input = () => {
    const [input, setInput] = useState('')
    //Dispatching AddTodo action
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(
            addTodo({
                name: input,
                done: false,
                id: Date.now()
            })
        )
    }
    

    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodoHandler}>Add!</button>
        </div>
    )
}

export default Input