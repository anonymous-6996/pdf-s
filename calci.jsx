import React, { useState } from 'react';

function Calculator() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleOperandChange = (event, operand) => {
    if (operand === 'operand1') {
      setOperand1(event.target.value);
    } else {
      setOperand2(event.target.value);
    }
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const calculateResult = () => {
    let num1 = parseFloat(operand1);
    let num2 = parseFloat(operand2);
    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="number" value={operand1} onChange={(e) => handleOperandChange(e, 'operand1')} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={operand2} onChange={(e) => handleOperandChange(e, 'operand2')} />
      <button onClick={calculateResult}>=</button>
      <div>
        Result: {result}
      </div>
    </div>
  );
}

export default Calculator;

