import React, { useState, useMemo } from 'react';

export default function UseMemo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, 'new todo']);
  };

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button data-test="add-todo" onClick={addTodo}>Add Todo</button>
    </div>
  );
}

function expensiveCalculation(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {} // dummy load
  return num;
}
