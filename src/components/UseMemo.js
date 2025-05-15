import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "new todo"]);
  };

  const renderedTodos = useMemo(() => {
    return todos.map((todo, index) => <p key={index}>{todo}</p>);
  }, [todos]);

  return (
    <div>
      <h2>Use Memo Example</h2>
      <button onClick={addTodo}>Add todo</button>
      {renderedTodos}
    </div>
  );
};

export default UseMemo;
