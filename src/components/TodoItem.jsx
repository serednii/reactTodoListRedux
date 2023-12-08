import { useDispatch } from 'react-redux';
// import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, completed,  removeTodo, toggleTodoComplete }) => {
  // const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
