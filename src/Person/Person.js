import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} aged {props.age}!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person