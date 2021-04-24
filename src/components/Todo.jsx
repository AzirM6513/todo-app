import React from 'react';
import Button from 'react-bootstrap/Button';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li
      className='list-group-item list-group-item-light mt-4'
      style={{ listStyleType: 'none' }}
    >
      {todo.task}
      <Button
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
