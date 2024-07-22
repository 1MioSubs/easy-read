import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greeting name="Roman" />
      <Counter />
    </div>
  );
}

export default App;
