import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {

  const dispatch = useDispatch();

  const current = useSelector(state => state.todos.current);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Add new todo"
          onChange={(e) => setText(e.target.value)}
          disabled={current}
        />
        <button type="submit" disabled={current}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
