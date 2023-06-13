import React, { useState } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const [state, setState] = useState({ ...initialState });

  const clearMemory = () => {
    setState({ ...initialState });
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const currentOperation = state.operation;

      const values = [...state.values];
      const prevValue = values[0];

      switch (currentOperation) {
        case '+':
          values[0] = values[0] + values[1];
          break;
        case '-':
          values[0] = values[0] - values[1];
          break;
        case '*':
          values[0] = values[0] * values[1];
          break;
        case '/':
          values[0] = values[0] / values[1];
          break;
      }
      values[1] = 0;

      if (values[0] === Infinity || !values[0]) values[0] = prevValue;

      setState({
        displayValue: String(values[0]),
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  const addDigit = (n) => {
    let newState = { ...state };

    if (n === '.' && newState.displayValue.includes('.')) return;

    const clearDisplay = state.displayValue === '0' || state.clearDisplay;

    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = currentValue + n;

    newState = { ...newState, displayValue, clearDisplay: false };

    if (n !== '.') {
      const i = newState.current;
      const newValue = parseFloat(displayValue);
      const values = [...newState.values];
      values[i] = newValue;

      newState = { ...newState, values };
    }
    setState({ ...newState });
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>
  );
};

export default Calculator;
