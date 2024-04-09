import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  return (
    <div>
      <h1>Body Mass Index (BMI) Calculator</h1>
      <div>
        <label>Height (in cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>
            BMI Categories:
            <ul>
              <li>Underweight: &lt; 18.5</li>
              <li>Normal weight: 18.5 - 24.9</li>
              <li>Overweight: 25 - 29.9</li>
              <li>Obesity: &ge; 30</li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
