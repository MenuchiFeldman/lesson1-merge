import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../redux/todoSlice";

const FilterBar = () => {

  const dispatch = useDispatch();

  const filter = useSelector(state => state.todos.filter);
  const current = useSelector(state => state.todos.current);

  return (
    <div>
      <select
        id="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        disabled={current}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default FilterBar;
