import React, { useState, useCallback } from 'react';
import UseMemo from '../components/UseMemo';
import TaskList from '../components/ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters!');
    }
  };

  // useCallback to memoize props passed to React.memo component
  const memoizedAddTodo = useCallback(addTodo, [todos]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager with React Memo</h1>

      <button data-test="add-todo" onClick={memoizedAddTodo}>Add Todo</button>

      <TaskList todos={todos} />

      <br /><br />

      <input
        type="text"
        value={customTask}
        onChange={handleInputChange}
        data-test="memo-input"
        placeholder="Enter custom task"
      />
      <button data-test="submit-button" onClick={handleSubmit}>Submit</button>

      <br /><br />

      <button data-test="increment" onClick={increment}>Increment</button>
      <p>Counter: {counter}</p>

      <UseMemo count={counter} />
    </div>
  );
}

export default App;
