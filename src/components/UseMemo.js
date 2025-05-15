import React, { useMemo } from 'react';

const UseMemo = ({ count }) => {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + num;
  };

  const computedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Expensive Calculation Result: {computedValue}</p>
    </div>
  );
};

export default UseMemo;
