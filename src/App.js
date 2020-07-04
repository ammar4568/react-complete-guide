import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "dsadsa", name: "Max", age: 20 },
      { id: "gas", name: "Manu", age: 28 },
      { id: "gfga", name: "Stephanie", age: 15 },
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          {
            this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} />
            })
          }
        </div >
      );
    }


    return (
      <div className="App" >
        <h1>Hi I'm a React App</h1>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
