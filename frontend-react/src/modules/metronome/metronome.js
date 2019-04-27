import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { handleChange } from '../../common/utils/index';

export const sounds = Object.freeze({
  click: 'Click',
  snare: 'Snare',
  kick: 'Kick',
  clap: 'Clap'
});

const Metronome = ({ defaultTempo, defaultSound }) => {
  const [tempo, setTempo] = useState(defaultTempo);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(defaultSound);

  useEffect(() => {
    const tick = playing
      ? setInterval(() => console.log('tick'), (60 / tempo) * 1000)
      : null;

    return () => clearInterval(tick);
  });

  return (
    <div>
      <label for="tempo">{tempo}</label>
      <input
        id="tempo"
        name="tempo"
        type="range"
        min="20"
        max="240"
        value={tempo}
        onChange={handleChange(setTempo)}
      />
      <input
        type="submit"
        value={playing ? 'Stop' : 'Play'}
        onClick={() => setPlaying(!playing)}
      />
      <select value={sound} onChange={handleChange(setSound)}>
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
