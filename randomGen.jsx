import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    if (!isNaN(minNum) && !isNaN(maxNum)) {
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(randomNum);
    } else {
      setRandomNumber(null);
    }
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <div>
        <label>Minimum:</label>
        <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
      </div>
      <div>
        <label>Maximum:</label>
        <input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <h2>Random Number: {randomNumber}</h2>}
    </div>
  );
}

export default RandomNumberGenerator;
