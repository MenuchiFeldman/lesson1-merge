// TodoList.jsx
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const todoList = useSelector(state => state.todos.todoList);
  const filter = useSelector(state => state.todos.filter);

  const filteredTodos = todoList.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incompleted") return !todo.completed;
    return true;
  });

  return (
    <div>
      {filteredTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
