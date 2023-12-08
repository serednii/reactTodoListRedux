import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({todos, removeTodo, toggleTodoComplete}) => {
    // const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
