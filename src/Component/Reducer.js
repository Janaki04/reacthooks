import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		default:
			return state
	}
}

function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
    <div>
       <h1>useReducer</h1> 
      <h4>Count : {count}</h4>
      <button onClick={() => dispatch('increment')}>Increase</button>| |
			<button onClick={() => dispatch('decrement')}>Decrease</button>
		</div>
	)
}

export default CounterOne