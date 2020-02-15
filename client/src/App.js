import React from 'react';
import './App.css';
import Form from './components/Form';
// import MyForm from './components/NewForm';

function App() {
  return (
    <div className="App">
      <div id="error-bar">Please enter a number</div>
      <p className="header"><span>Images</span></p>
      <Form/>
      <p><span id="display"></span></p>
    </div>
  );
}

export default App;
