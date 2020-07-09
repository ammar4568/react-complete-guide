import React, { useEffect } from 'react'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            console.log('Get Data from Cloud')
        }, 1000);

        return(() => { // Works as componentWillUnmount
            console.log('[Cockpit.js] cleanup work in useEffect')
        })
    }, []); // this will run for first time only

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            console.log('Get Persons Data from Cloud')
        }, 1000);

        return(() => {
            console.log('[Cockpit.js] clearkup work in useEffect');
        })
    }); // Works every time

    useEffect(() => {
        console.log('[Cockpit.js] useEffect Persons')
        setTimeout(() => {
            console.log('Get Persons Data from Cloud')
        }, 1000);

        return(() => {
            console.log('[Cockpit.js] clearkup work in persons useEffect');
        })
    }, [props.persons]); // this will run when persons change

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }


    const assignedClasses = [];

    if (props.personsLength <= 2) {
        assignedClasses.push('red')
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
