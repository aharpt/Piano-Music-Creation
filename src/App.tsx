import React from 'react';
import PianoBackground from './components/Piano/PianoBackground';
import './App.css';

const App = () : JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Placeholder Heading</h1>
      </header>
      <section className="body">
        <PianoBackground />
      </section>
    </div>
  );
}

export default App;
