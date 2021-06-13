import React from 'react'
import Person from './Person'

function NameList() {
    // Method-1 (how to make a list)
    // const names = ['Bruce', 'Diana', 'Arthur']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {
    //             nameList
    //         }
    //     </div>
    // )

    // Method-2 (how to make a list with key and child component)
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         altName: 'Batman'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 30,
    //         altName: 'Superman'
    //     },
    //     {
    //         id: 1,
    //         name: 'Diana',
    //         age: 27,
    //         altName: 'Wonder Woman'
    //     }
    // ]
    // // key -> special attribute need to include when creating lists of elements. NOT ACCESSIBLE IN CHILD COMPONENTS.
    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    // return <div>{personList}</div>

    // When to use index as a key?
    // 1. The items in the list do not have a unique id.
    // 2. The list is a static list and does/will not change.
    // 3. list will never be reordered or filtered.
    const names = ['Bruce', 'Diana', 'Arthur', 'Bruce']
    const nameList = names.map((name, index) => <h2 key={index}>{index}->{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
