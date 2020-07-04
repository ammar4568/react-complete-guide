import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 20 },
      { name: "Manu", age: 28 },
      { name: "Stephanie", age: 15 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Manu", age: 28 },
        { name: "Stephanie", age: 15 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 28 },
        { name: "Stephanie", age: 15 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!')}
                changed={this.nameChangeHandler} >
                My Hobbies: Racing
        </Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
            : null
        }
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
}

export default App;
