import React, { Fragment } from 'react'
import classes from "./Person.module.css";

const Person = (props) => {
    console.log('[Person.js] render')
    return (
        <Fragment>
            {/* <div className={classes.Person}> */}
            <p onClick={props.click}>I'm a {props.name} aged {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            {/* // </div> */}
        </Fragment>
    )
}

export default Person;