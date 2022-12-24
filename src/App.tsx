import React from 'react';
import PianoBackground from './components/Piano/PianoBackground';
import AvailableModes from './components/Modes/AvailableModes';

const App = () : JSX.Element => {
  return (
    <div style={{textAlign: 'center'}} className="App">
      <header className="App-header">
        <h1>Placeholder Heading</h1>
      </header>
      <section className="body">
        <PianoBackground />
        <AvailableModes />
      </section>
    </div>
  );
}

export default App;
