import React, { PureComponent } from 'react'
import Person from './Person/Person';

// const persons = (props) => {
class Persons extends PureComponent { // Pure component implements shouldComponentUpdate and checks all its props if changed

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed != this.props.changed ||
    //         nextProps.clicked != this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' } // will be available in componentDidUpdate.
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] render')
        return this.props.persons.map((person, index) => {
            return (
                <Person click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    isAuth={this.props.authenticated} />
            );
        })
    }
}

export default Persons;