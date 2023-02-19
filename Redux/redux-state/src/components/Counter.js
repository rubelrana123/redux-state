import React  from 'react';
import Button from './Button';
import Count from './Count';

const CountCompo = ({increment, decrement, id, count}) => {
 
  return (
    <div className="">
        <Count count={count}></Count>
        <Button handler={ () =>  increment(id)}>increment</Button>
        <Button handler={ () =>  decrement(id)}>decrement</Button>
     
    </div>
  );
};

export default CountCompo;