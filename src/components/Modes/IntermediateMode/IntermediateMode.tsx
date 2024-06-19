import {MUSIC_NOTES_PER_KEY, NOTES_PER_CHORD, topTimeSignature, convertMusicNotesPerKey, convertChordNotes} from '../../../utils/musicUtils';
import type {KeysType, ChordsType} from '../../../utils/musicUtils';

type Props = {
    musicKey: KeysType;
    chordList: ChordsType[];
}

const IntermediateMode = ({musicKey, chordList} : Props) => {
    const containerStyles = {
        padding: '15px 0 25px 0',
      };
    
      const headerStyles = {
        fontSize: '18px',
        fontWeight: 'bold',
      };
    
      const chordListStyles = {
        margin: '15px 0',
      }
    
      const chordItemStyles = {
        listStyleType: 'none'
      };
    
      const chordStyles = {
        fontWeight: 'bold',
      };

    return (
        <div style={containerStyles}>
        <div><span style={headerStyles}>Key:</span> {musicKey}</div>
        <div><span style={headerStyles}>Available Notes:</span> {convertMusicNotesPerKey(MUSIC_NOTES_PER_KEY[musicKey]).join(', ')}</div>
        <div><span style={headerStyles}>Timing:</span> {topTimeSignature}/4 ({topTimeSignature} beats per measure)</div>
        <ul style={chordListStyles}>
          <div style={headerStyles}>Chord List:</div> 
          {chordList.map((chord : ChordsType, index) => {
            return (
              <li key={`${chord}_${index}`} style={chordItemStyles}><span style={chordStyles}>{chord}:</span> {convertChordNotes(NOTES_PER_CHORD[chord]).join(', ')}</li>
            )
          })}
        </ul>
    </div>
    );
}

export default IntermediateMode;