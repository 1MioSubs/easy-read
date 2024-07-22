import React, { useState } from "react";

function Translate() {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');

  const handTraslate = () => {
    //Here we will handle the book translation logic
    setTranslation('Translatio of the word');
  };

  return (
    <div>
      <h2>Translate</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handTraslate}>Translate</button>
      <p>{translation}</p>
    </div>
  );
}

export default Translate;
