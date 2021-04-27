import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem.js'
import { useSelector } from 'react-redux'
import { selectTodoList, selectDoneTodos } from './features/todoSlice'

// const todoList = [{
//   item: 'todo',
//   done: false,
//   id: 1,
// }, {
//   item: 'todo2',
//   done: true,
//   id: 2
// }]

function App() {
  //Pulling state from store
  const todoList = useSelector(selectTodoList)
  const doneTodos = useSelector(selectDoneTodos)
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                name={item.name}
                done={item.done}
                id={item.id}
                key={item.id}
                />
            ))
          }
        </div>
        <p>Total done todos: {doneTodos.length}</p>
        <Input />
      </div>   
    </div>
  );
}

export default App;
