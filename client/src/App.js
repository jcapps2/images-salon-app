import React from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <p id="error-bar">Please enter a valid number</p>
      <p className="header"><span>Images</span></p>
      <MyForm/>
      <p><span id="display"></span></p>
    </div>
  );
}

export default App;
