import React from 'react';

const Counter = ({ count, onDecrement, onIncrement }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h3>Times the Increment/Decrement Buttons have been clicked: </h3>
          <input />
          <button onChange=''>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;