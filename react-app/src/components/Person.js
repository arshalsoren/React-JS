import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
            My name is {person.name}. I am {person.age} years old. You can call me {person.altName}
            </h2>
        </div>
    )
}

export default Person
