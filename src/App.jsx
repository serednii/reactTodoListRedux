import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import InputField from './components/InputField';
import { addTodo, fetchTodos } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
const [todos, setTodos] = useState([]);
const [text, setText] = useState('');

const addTodo = ()=>{
  if (text.trim().length){
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text, 
        completed: false,
      }
    ])
    setText('');
  }
}

const removeTodo =(todoId)=>{
  setTodos(todos.filter(todo => todo.id !== todoId))
}

const toggleTodoComplete = (todoId)=>{
  setTodos(
    todos.map(
      todo=>{
        if(todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,

        }
      }
    )
  )
}

  return (
    <div className='App'>
     <InputField 
     text={text} 
     handleInput={setText} 
     handleSubmit={addTodo}
     />

    <TodoList 
    todos={todos} 
    toggleTodoComplete={toggleTodoComplete}
    removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
