import React from 'react';

type songTimingType = {
    topTiming: number | string;
    bottomTiming: number | string;
}

type Props = {
    musicKey: string;
    chordList: string[];
    songTiming?: songTimingType;
}

const BeginnerMode = ({musicKey, chordList, songTiming} : Props) : JSX.Element => {
  return (
    <>
        <div>Music Key: {musicKey}</div>
        <div>Chord List: {chordList.join(', ')}</div>
    </>
  );
}

export default BeginnerMode;