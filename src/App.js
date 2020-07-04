import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons })
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
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          {
            this.state.persons.map((person, index) => {
              return (
                <Person click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  name={person.name}
                  age={person.age}
                  key={person.id} />
              );
            })
          }
        </div >
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App" >
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}


export default Radium(App); // Radium is used for pseudo selectors
