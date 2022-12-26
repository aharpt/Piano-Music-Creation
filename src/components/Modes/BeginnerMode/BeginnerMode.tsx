import React from 'react';
import {MUSIC_NOTES_PER_KEY, NOTES_PER_CHORD} from '../../../utils/musicUtils';
import {type KeysType, type ChordsType} from '../../../utils/musicUtils';

type songTimingType = {
    topTiming: number | string;
    bottomTiming: number | string;
}

type Props = {
    musicKey: KeysType;
    chordList: ChordsType[];
    melody: string[];
    songTiming?: songTimingType;
}

const BeginnerMode = ({musicKey, chordList, melody, songTiming = {topTiming: 3, bottomTiming: 4}} : Props) : JSX.Element => {
  const containerStyles = {
    padding: '25px 0 50px 0',
  };

  const headerStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const chordStyles = {
    marginLeft: '25px'
  };

  return (
    <div style={containerStyles}>
        <div><span style={headerStyles}>Available Notes:</span> {MUSIC_NOTES_PER_KEY[musicKey].join(', ')}</div>
        <div style={headerStyles}>Chord List:</div>
        {chordList.map(chord => {
          return (
            <div><b style={chordStyles}>- {chord}:</b> {NOTES_PER_CHORD[chord].join(', ')}</div>
          )
        })}
        <div><span style={headerStyles}>Timing:</span> {songTiming.topTiming} {songTiming.bottomTiming} ({songTiming.topTiming} beats per measure)</div>
        <div><span style={headerStyles}>Generated Melody:</span> {melody.join(', ')}</div>
    </div>
  );
}

export default BeginnerMode;