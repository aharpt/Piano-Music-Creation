import React from 'react';
import BeginnerModeForm from './BeginnerMode/BeginnerModeForm';

const AvailableModes = () : JSX.Element => {
    const [shouldShowBeginnerMode, setShouldShowBeginnerMode] = React.useState(false);

    const sectionStyles = {
        maxWidth: '80%',
        margin: 'auto',
        paddingBottom: '25px',
    };
    const modeStyles = {
        cursor: 'pointer',
        color: '#0000EE',
        fontSize: '20px',
        textDecoration: 'underline',
    }
    return (
      <>
        <section style={sectionStyles}>
            <h2>Available Modes:</h2>
                <span style={{...modeStyles, marginRight: '15px'}} onClick={() => {setShouldShowBeginnerMode(true)}}>Beginner</span>
                <span style={modeStyles} onClick={() => {setShouldShowBeginnerMode(false)}}>Reset Mode</span>
        </section>
        <section>
            {
                shouldShowBeginnerMode ? <BeginnerModeForm /> : null
            }
        </section>
      </>
    );
  }

export default AvailableModes;