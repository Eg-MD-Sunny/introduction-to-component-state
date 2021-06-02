import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Initial State Value Increase</p>
				<Counter></Counter>
			</header>
		</div>
	);
}

//=======>>Component Create [Start]<<==========//
function Counter(){
	const [count, setCount] = useState(0)

//======>>1st setState Method 	
	// const handleIncrease = () => {
	// 	const newCount = count + 1;
	// 	setCount(newCount);
	// }
//======>>2nd setState Method 	
	// const handleIncrease = () => {
	// 	setCount(count + 1);
	// }
//======>>3rd setState Method 
	// const handleIncrease = () => setCount(count + 1);

		// const handleDecrease = () => {
		// 	const oldCount = count - 1;
		// 	setCount(oldCount);
		// }
		return(
			<div>
				<h1>Count: {count}</h1>
				<button onClick={() => setCount(count + 1)}>onClick Increase</button> {/*======>>4th setState Method*/}
				<button onClick={() => setCount(count - 1)}>onClick Decrease</button><br></br>

				<button onMouseEnter={() => setCount(count + 1)}>onMouseEnter Increase</button>
				<button onMouseEnter={() => setCount(count - 1)}>onMouseEnter Decrease</button><br></br>

				<button onMouseLeave={() => setCount(count + 1)}>onMouseLeave Increase</button>
				<button onMouseLeave={() => setCount(count - 1)}>onMouseLeave Decrease</button><br></br>

				<button onMouseMove ={() => setCount(count + 1)}>onMouseMove Increase</button>
				<button onMouseMove ={() => setCount(count - 1)}>onMouseMove Decrease</button><br></br>

				<button onMouseOut ={() => setCount(count + 1)}>onMouseOut Increase</button>
				<button onMouseOut ={() => setCount(count - 1)}>onMouseOut Decrease</button><br></br>

				<button onMouseOver ={() => setCount(count + 1)}>onMouseOver Increase</button>
				<button onMouseOver ={() => setCount(count - 1)}>onMouseOver Decrease</button><br></br>
			</div>
		)
	}
export default App;
