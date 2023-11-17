import React from 'react';
import logo from './logo.svg';
import './App.css';

function test() : JSX.Element {
  return <h5>:3</h5>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          hi guys
        </h2>
        <p>
          was poppin?
        </p>
        <div>
          {test()}
        </div>
      </header>
    </div>
  );
}

export default App;
