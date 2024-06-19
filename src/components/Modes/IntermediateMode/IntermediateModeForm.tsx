import React from 'react';
import IntermediateMode from './IntermediateMode';
import { MUSIC_KEYS, AVAILABLE_CHORDS, type KeysType, type ChordsType } from '../../../utils/musicUtils';
import { beginnerMelody } from '../../../utils/createMelody';
import ABCMusicNotation from '../../ABCMusicNotation/ABCMusicNotation';

const IntermediateModeForm = () : JSX.Element => {
    const [shouldShowIntermediateMode, setShouldShowIntermediateMode] = React.useState(false);
    const [canSeeMelody, setCanSeeMelody] = React.useState(false);
    const [shouldDisableSubmit, setShouldDisableSubmit] = React.useState(true);
    const [chordsChecked, setChordsChecked] = React.useState(0);
    const [musicKey, setMusicKey] = React.useState(MUSIC_KEYS[0]);
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

    const buttonStyles = {
        cursor: shouldDisableSubmit ? 'not-allowed' : 'inherit',
        marginTop: '20px',
    }

    React.useEffect(() => {
        if (Boolean(chordsChecked)) {
            setShouldDisableSubmit(false);
        } else {
            setShouldDisableSubmit(true);
        }
    }, [chordsChecked]);

    const removeChordSelection = (chordName : string) => {
        const newChordList = [];
        for (let i = 0; i < chordList.length; i++) {
            if (chordList[i] !== chordName) {
                newChordList.push(chordList[i]);
            }
        }
        return newChordList;
    }

    const onCheckboxSelection = (event: any) : void => {
        if (event.target.checked) {
            setChordList(prevChordList => [...prevChordList, event.target.name]);
            setChordsChecked(prevChordsChecked => prevChordsChecked + 1);
            event.target.checked = false;
        } else {
            setChordList(removeChordSelection(event.target.name));
            setChordsChecked(prevChordsChecked => prevChordsChecked - 1);
        }
    }

    const onFormButtonClick = () => {
        setShouldShowIntermediateMode(true);
        setCanSeeMelody(true);
    }

    // NEED TO CHANGE THIS
    const melody = beginnerMelody(chordList as ChordsType[]);

  return (
    <>
    {shouldShowIntermediateMode 
        ? <IntermediateMode musicKey={musicKey} chordList={chordList as ChordsType[]} /> 
        : 
        <form style={formStyles}>
            <section style={sectionStyles}>
                <label htmlFor="key">Please Select A Music Key</label>
                <br />
                <select style={selectStyles} value={musicKey} onChange={event => setMusicKey(event.target.value as KeysType)} name="musicKey" id="key">
                    {MUSIC_KEYS.map(key => <option key={key} value={key}>{key}</option>)}
                </select>
            </section>
            <section style={sectionStyles}>
                <span>Please Select your Desired Chords</span><br />
                {AVAILABLE_CHORDS.map((chord, index) => {
                    return (
                        <section key={`${chord}_${index}`} style={chordSectionStyles}>
                            <input onClick={event => {onCheckboxSelection(event)}} type="checkbox" id={chord} name={chord} />
                            <label htmlFor={chord}>{chord}</label>
                        </section>
                    )
                })}
                <textarea readOnly={true} rows={5} cols={25} value={chordList.join(', ')}></textarea>
                <br />
                <button disabled={shouldDisableSubmit} style={buttonStyles} type='button' onClick={onFormButtonClick}>Submit</button>
            </section>
        </form>
    }
    <ABCMusicNotation chordList={chordList as ChordsType[]} melody={melody} canSeeMelody={canSeeMelody} musicKey={musicKey} />
    </>
  );
}

export default IntermediateModeForm;