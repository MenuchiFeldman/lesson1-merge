import { useSelector } from 'react-redux';
import inProgress from '../assets/Spinner-1s-200px.gif';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateCurrent } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();

    const current = useSelector(state => state.todos.current);

    return (
        <div>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch(updateCurrent(todo.id))}
            >
                {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => dispatch(toggleComplete(todo.id))}>Complete</button>
            {current === todo.id && <img src={inProgress} alt="inProgress" width="45px" height="45px" />}
        </div>
    );
};

export default TodoItem;
