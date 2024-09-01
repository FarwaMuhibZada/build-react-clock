import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SetTimer({
  title,
  count,
  handleDecrease,
  handleIncrease,
}) {
  const id = title.toLowerCase();

  return (
    <div className="timer-container">
      <h2 id={`${id}-label`}>
        {title}
        Length
      </h2>
      <div className="flex actions-wrapper">
        <button
          id={`${id}-decrement`}
          onClick={handleDecrease}
          type="button"
          aria-label={`Decrease ${title} length`} // Adding a label for accessibility
        >
          <FaMinus />
        </button>

        <span id={`${id}-length`}>{count}</span>

        <button
          id={`${id}-increment`}
          onClick={handleIncrease}
          type="button"
          aria-label={`Increase ${title} length`} // Adding a label for accessibility
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

SetTimer.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
};

export default SetTimer;
