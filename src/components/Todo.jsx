import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Todo = ({ todo, deleteTodo }) => {
  const completeTodo = (id) => {
    if (document.getElementById(id).classList.contains('todo-item-complete')) {
      document.getElementById(id).classList.remove('todo-item-complete');
      document.getElementById(id + 'btn').removeAttribute('disabled');
    } else {
      document.getElementById(id).classList.add('todo-item-complete');
      document.getElementById(id + 'btn').setAttribute('disabled', true);
    }
  };

  return (
    <li
      id={todo.id.toString()}
      className='list-group-item list-group-item-light mt-4'
      onClick={() => completeTodo(todo.id)}
    >
      {todo.task}
      <Button
        id={todo.id.toString() + 'btn'}
        className='ml-5'
        variant='danger'
        size='sm'
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </Button>
    </li>
  );
};

export default Todo;
