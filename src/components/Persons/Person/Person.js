import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import withClass from '../../hoc/withClass'
import classes from "./Person.module.css";

const Person = (props) => {
    console.log('[Person.js] render')
    return (
        <Auxiliary>
            {/* <div className={classes.Person}> */}
            <p onClick={props.click}>I'm a {props.name} aged {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            {/* // </div> */}
        </Auxiliary>
    )
}

export default withClass(Person, classes.Person);