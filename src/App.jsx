import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Todos from './components/Todos';
import Create from './components/Create';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const ref = localStorage.getItem('todos');
    if (ref) {
      setTodos(JSON.parse(ref));
    }
  }, []);

  const addTodo = (todo) => {
    setTodos(todos.concat(todo));
    localStorage.setItem('todos', JSON.stringify(todos.concat(todo)));
  };

  const updateTodos = (updateTodos) => {
    localStorage.setItem('todos', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  return (
    <div className='container-sm d-flex align-items-center justify-content-center flex-column'>
      <Header />
      <Todos todos={todos} updateTodos={updateTodos} />
      <Create addTodo={addTodo} />
    </div>
  );
}

export default App;
