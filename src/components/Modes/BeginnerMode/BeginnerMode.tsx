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
    songTiming?: songTimingType;
}

const BeginnerMode = ({musicKey, chordList, songTiming} : Props) : JSX.Element => {
  const containerStyles = {
    padding: '25px 0 50px 0',
  }

  return (
    <div style={containerStyles}>
        <div>Available Notes: {MUSIC_NOTES_PER_KEY[musicKey].join(', ')}</div>
        <div>Chord List:</div>
        {chordList.map(chord => {
          return (
            <span style={{marginLeft: '20px'}}>- <b>{chord}:</b> {NOTES_PER_CHORD[chord].join(', ')}</span>
          )
        })}
    </div>
  );
}

export default BeginnerMode;