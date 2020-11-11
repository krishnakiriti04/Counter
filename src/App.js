import React, {useState} from 'react';
import './App.css';

const Counter = ({count, increment,decrement, del})=>{
	return (
		<div>
			<h4>{count}</h4>
			<button onClick={()=>increment()}>Increase</button>
			<button onClick={()=>decrement()}>Decrease</button>
			<button onClick={()=>del()}>Delete</button>
		</div>
		)
}

const App = ()=>{
	const [count,setCount] = useState([0]);

	const addcounter=() => {
		setCount(count.concat([0]))
	}

	const increment = (currInd)=>{
		let newVal = count.map((val,ind)=>currInd===ind ? val = val+1: val );
		setCount(newVal);
	}

	const decrement = (currInd)=>{
		let newVal = count.map((val,ind)=>currInd===ind ? val = val-1: val );
		setCount(newVal);
	}

	const del = (currInd)=>{
		const newcount = count.filter((val,ind)=>ind!==currInd)
		setCount(newcount);
	}

	return (
	<div style={{textAlign :"center"}}>
	{count.map((val,ind) => <Counter key= {ind} count={val} increment = {()=>increment(ind)} decrement = {()=>decrement(ind)} del={()=>del(ind) }/>)}
		<br />
		<button onClick={addcounter}>Add Counter</button>
	</div>
)}

 export default App;
