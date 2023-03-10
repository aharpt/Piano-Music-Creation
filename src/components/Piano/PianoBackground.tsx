import piano from './piano.png';

const PianoBackground = () : JSX.Element => {
  const imageStyles = {
    width: '100%',
  }
  return (
    <img style={imageStyles} src={piano} alt="piano keyboard" />
  );
}

export default PianoBackground;