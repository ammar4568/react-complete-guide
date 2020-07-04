import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <Person name="Max" age="20" />
      <Person name="Manu" age="28" >
        My Hobbies: Racing
      </Person>
      <Person name="Stephanie" age="15" />
    </div>
  );
}

export default App;
