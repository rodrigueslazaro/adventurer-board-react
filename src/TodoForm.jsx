import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="list-form">
      <input
        type="text"
        placeholder="Mission description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">📝</button>
    </form>
  );
};

export default TodoForm;
