import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setcount] = useState(0);
 function increment () {
       setcount((precount) => precount + 1)
 }
 function decrement () {
  setcount((precount) => precount + 1)
 }
  return (
    <div className="App">
       <button>{count}</button>
       <button onClick={ increment }>increment</button>
       <button onClick={decrement}>increment</button>
    </div>
  );
}

export default App;
