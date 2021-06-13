import React, { Fragment } from 'react'

function Columns() {
    const items =[]
    return (
        <>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Soren</td>
        </> // shorthand synatx for Fragment but we cannot use 'key' with it
    )
}

export default Columns
