import React from 'react';
import PianoBackground from './components/Piano/PianoBackground';
import AvailableModes from './components/Modes/AvailableModes';

const App = () : JSX.Element => {
  return (
    <div style={{textAlign: 'center'}}>
      <header style={{textAlign: 'left', marginLeft: '25px'}}>
        <h1>Create A Melody From Scratch</h1>
      </header>
      <section>
        <PianoBackground />
        <AvailableModes />
      </section>
    </div>
  );
}

export default App;
