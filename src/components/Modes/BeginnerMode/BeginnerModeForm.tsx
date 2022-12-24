import React from 'react';
import BeginnerMode from './BeginnerMode';

const MUSIC_KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
];

const AVAILABLE_CHORDS = [
    'A',
    'Am',
    'C',
    'D',
    'G',
    'E',
    'Em'
];

const BeginnerModeForm = () : JSX.Element => {
    const [shouldShowBeginnerMode, setShouldShowBeginnerMode] = React.useState(false);
    const [musicKey, setMusicKey] = React.useState<string>('');
    const [chordList, setChordList] = React.useState<string[]>([]);

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

  return (
    <>
        <form style={formStyles}>
            <section style={sectionStyles}>
                <label htmlFor="key">Please Select A Music Key</label>
                <br />
                <select style={selectStyles} value={musicKey} onChange={event => setMusicKey(event.target.value)} name="musicKey" id="key">
                    {MUSIC_KEYS.map(key => <option value={key.toLowerCase()}>{key}</option>)}
                </select>
            </section>
            <section style={sectionStyles}>
                <span>Please Select your Desired Chords</span><br />
                {AVAILABLE_CHORDS.map(chord => {
                    return (
                        <section style={chordSectionStyles}>
                            <input onClick={event => {onCheckboxSelection(event)}} type="checkbox" id={chord.toLowerCase()} name={chord.toLowerCase()} />
                            <label htmlFor={chord.toLowerCase()}>{chord}</label>
                        </section>
                    )
                })}
                <button type='button' onClick={() => {setShouldShowBeginnerMode(true)}}>Submit</button>
            </section>
        </form>
        {shouldShowBeginnerMode ? <BeginnerMode musicKey={musicKey} chordList={chordList} /> : null}
    </>
  );
}

export default BeginnerModeForm;