import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const SetTimer = ({ title, count, handleDecrease, handleIncrease }) => {
  const id = title.toLowerCase();

  return (
    <div className="timer-container">
      <h2 id={`${id}-label`}>
        {title} Length
      </h2>
      <div className="flex actions-wrapper">
        <button id={`${id}-decrement`} onClick={handleDecrease}>
          <FaMinus />
        </button>

        <span id={`${id}-length`}>{count}</span>

        <button id={`${id}-increment`} onClick={handleIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default SetTimer;



