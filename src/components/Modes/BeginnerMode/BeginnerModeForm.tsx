import React from 'react';
import BeginnerMode from './BeginnerMode';
import { beginnerMelody } from '../../../utils/createMelody';
import { MUSIC_KEYS, AVAILABLE_CHORDS, type KeysType, type ChordsType } from '../../../utils/musicUtils';
import ABCMusicNotation from '../../ABCMusicNotation/ABCMusicNotation';

const BeginnerModeForm = () : JSX.Element => {
    const [shouldShowBeginnerMode, setShouldShowBeginnerMode] = React.useState(false);
    const [canSeeMelody, setCanSeeMelody] = React.useState(false);
    const [musicKey, setMusicKey] = React.useState('');
    const [chordList, setChordList] = React.useState<unknown[]>([]);

    const formStyles = {
        padding: '25px 0 50px 0',
    }

    const sectionStyles = {
        padding: '25px 0',
    }

    const chordSectionStyles = {
        display: 'inline',
        marginRight: '10px',
    }

    const selectStyles = {
        width: '50%',
    }

const onCheckboxSelection = (event: any) : void => {
    setChordList(prevChordList => [...prevChordList, event.target.name]);
}

const onFormButtonClick = () => {
    setShouldShowBeginnerMode(true);
    setCanSeeMelody(true);
}

const melody = beginnerMelody(chordList as ChordsType[]);

  return (
    <>
    {shouldShowBeginnerMode ? <BeginnerMode melody={melody} musicKey={musicKey as KeysType} chordList={chordList as ChordsType[]} /> :
        <form style={formStyles}>
            <section style={sectionStyles}>
                <label htmlFor="key">Please Select A Music Key</label>
                <br />
                <select style={selectStyles} value={musicKey} onChange={event => setMusicKey(event.target.value)} name="musicKey" id="key">
                    {['', ...MUSIC_KEYS].map(key => <option value={key}>{key}</option>)}
                </select>
            </section>
            <section style={sectionStyles}>
                <span>Please Select your Desired Chords</span><br />
                {AVAILABLE_CHORDS.map(chord => {
                    return (
                        <section style={chordSectionStyles}>
                            <input onClick={event => {onCheckboxSelection(event)}} type="checkbox" id={chord} name={chord} />
                            <label htmlFor={chord}>{chord}</label>
                        </section>
                    )
                })}
                <button type='button' onClick={onFormButtonClick}>Submit</button>
            </section>
        </form>
    }
        <ABCMusicNotation chordList={chordList as ChordsType[]} melody={melody} canSeeMelody={canSeeMelody} musicKey={musicKey} />
    </>
  );
}

export default BeginnerModeForm;