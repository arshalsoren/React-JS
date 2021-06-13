import React from 'react'

// function Greet() {
//     return <h1>Hello arshalsoren!</h1>
// }

// ES6
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName} (functionalcomponent)</h1>
            {props.children}
        </div>
    )
}

export default Greet

// export const Greet = () => <h1>Hello arshalsoren!</h1>
// the above is called name export. it is not default export. In App.js, the import line will be
// import { Greet } from './components/Greet'
// we cannot use a different name in the place of { Greet }.

// Props is just an object  that contains the attributes and their values which have been passed from the parent component.