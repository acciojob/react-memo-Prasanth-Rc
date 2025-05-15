import React from 'react';

const TaskList = React.memo(({ todos }) => {
  console.log('Rendering TaskList...');
  return (
    <div>
      <h3>Todo List:</h3>
      <ul data-test="todo-list">
        {todos.map((todo, index) => (
          <li key={index} data-test="todo-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;
