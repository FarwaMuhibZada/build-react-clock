import React from 'react';
import { FaPlay, FaPause, FaSync } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Clock = ({
  currentTimer,
  clockCount,
  isPlaying,
  handlePlayPause,
  handleReset,
  convertToTime,
}) => (
  <div className="clock-container">
    <h1 id="timer-label">{currentTimer}</h1>
    <span id="time-left">{convertToTime(clockCount)}</span>

    <div className="flex">
      <button id="start_stop" onClick={handlePlayPause} type="button">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button id="reset" onClick={handleReset} type="button">
        <FaSync />
      </button>
    </div>
  </div>
);

Clock.propTypes = {
  currentTimer: PropTypes.string.isRequired,
  clockCount: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlePlayPause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  convertToTime: PropTypes.func.isRequired,
};

export default Clock;
