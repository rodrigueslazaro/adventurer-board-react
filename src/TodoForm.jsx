import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <ul className='list-form'>
      <li>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Mission description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">📝</button>
        </form>
      </li>
    </ul>
  );
};

export default TodoForm;
