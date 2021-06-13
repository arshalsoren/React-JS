import React from 'react'

const Hello = () => {
// textbook-method
//    return (
//        <div>  //<div className='dummyClass>
//            <h1>Hello JSX</h1>
//        </div>
//    )
    return React.createElement(
        'div', 
        {id: 'henlo', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello React.createElement'))
}

export default Hello