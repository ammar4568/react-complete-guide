import React from 'react'

const Person = () => {
    return (
        <p>
            I'm a person aged {Math.floor(Math.random() * 30)}!
        </p>
    )
}

export default Person