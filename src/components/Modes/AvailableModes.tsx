import React from 'react';
import BeginnerModeForm from './BeginnerMode/BeginnerModeForm';
import IntermediateModeForm from './IntermediateMode/IntermediateModeForm';

const AvailableModes = () : JSX.Element => {
    const [shouldShowBeginnerMode, setShouldShowBeginnerMode] = React.useState(false);
    const [shouldShowIntermediateMode, setShouldShowIntermediateMode] = React.useState(false);

    const sectionStyles = {
        maxWidth: '80%',
        margin: 'auto',
        paddingBottom: '25px',
    };
    const modeLinkStyles = {
        cursor: 'pointer',
        color: '#0000EE',
        fontSize: '20px',
        textDecoration: 'underline',
        marginRight: '15px',
    };

    const resetModes = () => {
      setShouldShowBeginnerMode(false);
      setShouldShowIntermediateMode(false);
    }

    const showBeginnerMode = () => {
      setShouldShowBeginnerMode(true);
      setShouldShowIntermediateMode(false);
    }

    const showIntermediateMode = () => {
      setShouldShowIntermediateMode(true);
      setShouldShowBeginnerMode(false);
    }

    return (
      <>
        <section style={sectionStyles}>
            <h2>Available Modes:</h2>
                <span style={{...modeLinkStyles, marginRight: '15px'}} onClick={showBeginnerMode}>Beginner</span>
                <span style={{...modeLinkStyles, marginRight: '15px'}} onClick={showIntermediateMode}>Intermediate</span>
        </section>
        <section>
          <span style={modeLinkStyles} onClick={resetModes}>Reset Mode</span>
        </section>
        <section style={sectionStyles}>
            {shouldShowBeginnerMode ? <BeginnerModeForm /> : null}
            {shouldShowIntermediateMode ? <IntermediateModeForm /> : null}
        </section>
      </>
    );
  }

export default AvailableModes;