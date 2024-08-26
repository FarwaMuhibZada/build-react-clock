import React from 'react';
import { FaPlay, FaPause, FaSync } from 'react-icons/fa';

const Clock = ({ currentTimer, clockCount, isPlaying, handlePlayPause, handleReset, convertToTime }) => {
  return (
    <div className="clock-container">
      <h1 id="timer-label">{currentTimer}</h1>
      <span id="time-left">{convertToTime(clockCount)}</span>

      <div className="flex">
        <button id="start_stop" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button id="reset" onClick={handleReset}>
          <FaSync />
        </button>
      </div>
    </div>
  );
};

export default Clock;

