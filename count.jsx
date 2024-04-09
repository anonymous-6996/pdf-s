import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={6}
        cols={50}
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter;
