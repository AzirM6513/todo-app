import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, updateTodos }) => {
  const deleteTodoById = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className='todo-list list-group'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodoById} />
      ))}
    </ul>
  );
};

export default Todos;
