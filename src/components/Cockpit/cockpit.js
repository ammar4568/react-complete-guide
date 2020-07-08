import React, { useEffect } from 'react'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            console.log('Get Data from Cloud')
        }, 1000);
    }, []); // this will run for first time only

    useEffect(() => {
        console.log('[Cockpit.js] useEffectPersons')
        setTimeout(() => {
            console.log('Get Persons Data from Cloud')
        }, 1000);
    }, [props.persons]); // this will run when persons change

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }


    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push('red')
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold')
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;
