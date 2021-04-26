import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem.js'
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

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

  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
                />
            ))
          }
        </div>
        <Input />
      </div>   
    </div>
  );
}

export default App;
