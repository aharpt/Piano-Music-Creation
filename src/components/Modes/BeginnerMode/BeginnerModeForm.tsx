import React from 'react';

const MUSIC_KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
];

const BeginnerModeForm = () : JSX.Element => {
    const [musicKey, setMusicKey] = React.useState<string>('');

    const formStyles = {
        padding: '25px 0 50px 0',
    }

    const selectStyles = {
        width: '50%',
    }

  return (
    <form style={formStyles}>
        <section>
            <label htmlFor="key">Please Select A Music Key</label>
            <br />
            <select style={selectStyles} value={musicKey} onChange={event => setMusicKey(event.target.value)} name="musicKey" id="key">
                {MUSIC_KEYS.map(key => <option value={key.toLowerCase()}>{key}</option>)}
            </select>
        </section>
    </form>
  );
}

export default BeginnerModeForm;