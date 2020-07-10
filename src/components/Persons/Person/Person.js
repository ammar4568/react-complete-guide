import React from 'react'
import PropTypes from 'prop-types';
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

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);