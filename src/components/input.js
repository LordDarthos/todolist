import React from 'react';
import './App.css';

const Input = () => {
    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <div className="App">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input