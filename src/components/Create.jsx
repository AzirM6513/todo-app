import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Create = ({ handleSubmit, addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    const newTodo = {
      task: todo,
      id: Math.floor(Math.random() * 10000),
    };

    console.log(newTodo);

    addTodo(newTodo);
    setTodo('');
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='todo' className='form-label mt-4'>
          new to-do
        </label>
        <input
          id='todo'
          className='form-control'
          type='text'
          value={todo}
          onChange={handleTodoChange}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <Button className='mt-3' onClick={handleClick} type='submit'>
          Create
        </Button>
      </div>
    </form>
  );
};

export default Create;
