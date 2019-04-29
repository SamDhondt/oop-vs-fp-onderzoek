import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInputValue } from '../../common/utils/index';

export const sounds = Object.freeze({
  click: 'Click',
  snare: 'Snare',
  kick: 'Kick',
  clap: 'Clap'
});

const useMetronomeTick = (playing, tempo) => {
  useEffect(() => {
    const tick = playing
      ? setInterval(() => console.log('tick'), (60 / tempo) * 1000)
      : null;

    return () => clearInterval(tick);
  });
};

const Metronome = ({ defaultTempo, defaultSound }) => {
  const tempo = useInputValue(defaultTempo);
  const [playing, setPlaying] = useState(false);
  const sound = useInputValue(defaultSound);
  useMetronomeTick(playing, tempo.value);

  return (
    <div>
      <label>{tempo.value}</label>
      <input type="range" min="20" max="240" {...tempo} />
      <input
        type="submit"
        value={playing ? 'Stop' : 'Play'}
        onClick={() => setPlaying(!playing)}
      />
      <select {...sound}>
        {Object.keys(sounds).map(key => (
          <option key={key} value={key}>
            {sounds[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

Metronome.propTypes = {
  defaultTempo: PropTypes.number,
  defaultSound: PropTypes.string
};

Metronome.defaultProps = {
  defaultTempo: 60,
  defaultSound: sounds.click
};

export default Metronome;
