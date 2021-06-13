import React from 'react'

function MemoComp({name}) {
    console.log("Rendering MemoComp")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

// React.memo(MemoComp) is a higher order component. It accepts a component add some things to that component
// and returns a new enhanced component. 

// React.memo() stops re renders when there is no changes in props.