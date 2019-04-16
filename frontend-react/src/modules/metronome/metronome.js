import React, { useState, useEffect } from 'react';

export const sounds = Object.freeze({
  click: 'Click',
  snare: 'Snare',
  kick: 'Kick',
  clap: 'Clap'
});

const handleChange = (setValue) => ({ target: { value: newValue } }) =>
  setValue(newValue);

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
      <input
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
        {Object.keys(sounds).map((key) => (
          <option key={key} value={key}>
            {sounds[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Metronome;
