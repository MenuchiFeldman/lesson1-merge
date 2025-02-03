import { useSelector } from "react-redux";

const Summary = () => {

  const todos = useSelector(state => state.todos.todoList);
  const current = useSelector(state => state.todos.current);

  return (
    <div style={{
      color: current ? 'gray' : 'black',
    }}>
      <p>Total Todos: {todos.length}</p>
      <p>Completed: {todos.filter(todo => todo.completed).length}</p>
    </div>
  );
};

export default Summary;
