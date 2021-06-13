import React, { useState } from 'react'

function NameSetter() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            {/* '...name' is used so that 'setName' takes everything present in the 'name' then update it's 'firstname' */}
            {/* without '...name' it removes the other object from the 'useState' */}
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Hi! My name is {name.firstName} {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3> {/*to see how it works live */}
        </form>
    )
}

export default NameSetter
