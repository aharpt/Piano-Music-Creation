import React from 'react';
import piano from './piano.png';

function PianoBackground() {
  const imageStyles = {
    width: '100%',
  }
  return (
    <img style={imageStyles} src={piano} alt="piano keyboard" />
  );
}

export default PianoBackground;