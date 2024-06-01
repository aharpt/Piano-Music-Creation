import React from 'react';
import {MUSIC_NOTES_PER_KEY, NOTES_PER_CHORD, topTimeSignature} from '../../../utils/musicUtils';
import type {KeysType, ChordsType} from '../../../utils/musicUtils';

type Props = {
    musicKey: KeysType;
    chordList: ChordsType[];
    melody: string[];
}

const BeginnerMode = ({musicKey, chordList, melody} : Props) : JSX.Element => {
  const containerStyles = {
    padding: '25px 0 50px 0',
  };

  const headerStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const chordStyles = {
    fontWeight: 'bold',
    marginLeft: '25px',
  };

  return (
    <div style={containerStyles}>
        <div><span style={headerStyles}>Available Notes:</span> {MUSIC_NOTES_PER_KEY[musicKey].join(', ')}</div>
        <div style={headerStyles}>Chord List:</div>
        {chordList.map((chord, index) => {
          return (
            <div key={`${chord}_${index}`}><span style={chordStyles}>- {chord}:</span> {NOTES_PER_CHORD[chord].join(', ')}</div>
          )
        })}
        <div><span style={headerStyles}>Timing:</span> {topTimeSignature}/4 ({topTimeSignature} beats per measure)</div>
        <div><span style={headerStyles}>Generated Melody:</span> {melody.join(', ')}</div>
    </div>
  );
}

export default BeginnerMode;