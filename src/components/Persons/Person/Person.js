import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] render')
        return (
            <Auxiliary>
                
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                
                {/* <div className={classes.Person}> */}
                <p onClick={this.props.click}>I'm a {this.props.name} aged {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name} />
                {/* // </div> */}
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);