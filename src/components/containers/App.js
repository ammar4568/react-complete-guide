import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

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
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App} >
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}


export default App;