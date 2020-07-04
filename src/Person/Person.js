import React from 'react'

const Person = (props) => {
    return (
        <p>
            I'm a {props.name} aged {props.age}!
        </p>
    )
}

export default Person