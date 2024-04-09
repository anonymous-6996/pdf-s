import React, { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?';

    let validChars = '';
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Include Uppercase Letters:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Lowercase Letters:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && <div><h2>Generated Password:</h2><p>{password}</p></div>}
    </div>
  );
}

export default PasswordGenerator;
