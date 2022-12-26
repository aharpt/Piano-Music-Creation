import React from "react";
import abcjs from "abcjs";
import 'abcjs/abcjs-audio.css';
import { constructSong } from "../../utils/createMelody";
import type { ChordsType } from "../../utils/musicUtils";

type Props = {
    canSeeMelody: boolean;
    musicKey: string;
    chordList: ChordsType[];
    melody: string[];
    songTiming: {
        topTiming: number | string;
        bottomTiming: number | string;
    }
}

type DisplayType = 'inline' | 'block' | 'inline-block' | 'none';
const ABCMusicNotation = ({canSeeMelody, musicKey, chordList, melody, songTiming} : Props) => {
    const [displayValue, setDisplayValue] = React.useState<DisplayType>('none');

    const sectionStyles = {
        maxWidth: '80%',
        margin: 'auto',
        paddingBottom: '25px',
    };

    const modeStyles = {
        cursor: canSeeMelody ? 'pointer' : 'not-allowed',
        color: canSeeMelody ? '#0000EE' : 'gray',
        fontSize: '20px',
        textDecoration: canSeeMelody ? 'underline' : 'none',
    };

    const paperStyles = {
        display: displayValue
    };

    const songConstruction = constructSong(chordList, melody);
    abcjs.renderAbc("paper", `X:1\nM: ${songTiming.topTiming}/${songTiming.bottomTiming}\nL: 1/4\nK:${musicKey}\n${songConstruction}\n`);

    return (
        <>
            <section style={sectionStyles}>
                    <span aria-disabled={true} style={modeStyles} onClick={() => {setDisplayValue('inline-block')}}>Show Melody</span>
            </section>
            <div style={paperStyles} id="paper"></div>
        </>
        

    )
};

export default ABCMusicNotation;