import React from 'react';
import Button from 'react-bootstrap/Button';

const Todo = ({ todo, deleteTodo }) => {
  const completeTodo = (id) => {
    const todoElement = document.getElementById(id).classList;
    const todoElementbtn = document.getElementById(id + 'btn');

    if (todoElement.contains('todo-item-complete')) {
      todoElement.remove('todo-item-complete');
      todoElementbtn.removeAttribute('disabled');
    } else {
      todoElement.add('todo-item-complete');
      todoElementbtn.setAttribute('disabled', true);
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
