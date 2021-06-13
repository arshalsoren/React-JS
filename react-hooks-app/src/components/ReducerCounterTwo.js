import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
// it is recommended to use multiple state variables when declared globally

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement1':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter = {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>
                Increment 1st Counter
            </button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>
                Decrement 1st Counter
            </button>
            <button onClick={() => dispatch({ type: 'increment1', value: 5 })}>
                Increment 1st Counter with 5
            </button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 5 })}>
                Decrement 2nd Counter with 5
            </button>
            <div>Second Counter = {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                Increment 2nd Counter
            </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                Decrement 2nd Counter
            </button>
            <br />
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCounterTwo
