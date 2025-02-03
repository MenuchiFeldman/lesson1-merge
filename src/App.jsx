import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Summary from './components/Summary';
import FilterBar from './components/FilterBar';
import AddTodoForm from './components/AddTodoForm';
import { useSelector } from 'react-redux';
import Points from './components/Points';

function App() {

  const todos = useSelector(state => state.todoList);
  const filter = useSelector(state => state.filter);
  const current = useSelector(state => state.current);

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <h1>Todo List</h1>
        <Summary />
        <FilterBar />
        <AddTodoForm />
        <TodoList />
      </div>
      <div>
        <Points />
      </div>
    </ div>
  );
}

export default App;
