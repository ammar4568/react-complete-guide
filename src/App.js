import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 20 },
      { name: "Manu", age: 28 },
      { name: "Stephanie", age: 15 },
    ]
  })

  const [otherState, setOtherState] = useState('some other state')

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 20 },
        { name: "Manu", age: 28 },
        { name: "Stephanie", age: 27 },
      ]
    })
  }


  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
        My Hobbies: Racing
        </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

}

export default App;
