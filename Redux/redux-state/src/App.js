 
import './App.css';
import React, { useState } from 'react';
import CountCompo from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
      id: 1,
      count: 0,
  },
  {
      id: 2,
      count: 0,
  },
];
export default function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
      return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
      const updatedCounter = state.map((c) => {
          if (c.id === id) {
              return {
                  ...c,
                  count: c.count + 1,
              };
          }
          return { ...c };
      });

      setState(updatedCounter);
  };

  const decrement = (id) => {
      const updatedCounter = state.map((c) => {
          if (c.id === id) {
              return {
                  ...c,
                  count: c.count - 1,
              };
          }
          return { ...c };
      });
      setState(updatedCounter);
  };

  return (
      <div>
          <h1  >
              Simple Counter Application
          </h1>

          <div >
               {state.map((count) => (
                  <CountCompo
                      key={count.id}
                      id={count.id}
                      count={count.count}
                      increment={increment}
                      decrement={decrement}
                  />
              ))}
              <Stats count={totalCount()} /> 
          </div>
      </div>
  );
              }
 
