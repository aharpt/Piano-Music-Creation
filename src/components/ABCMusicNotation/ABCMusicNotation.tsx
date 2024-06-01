import React from "react";
import abcjs from "abcjs";
import 'abcjs/abcjs-audio.css';
import { constructSong } from "../../utils/createMelody";
import type { ChordsType } from "../../utils/musicUtils";
import { topTimeSignature } from "../../utils/musicUtils";

type Props = {
    canSeeMelody: boolean;
    musicKey: string;
    chordList: ChordsType[];
    melody: string[];
}

type DisplayType = 'inline' | 'block' | 'inline-block' | 'none';
const ABCMusicNotation = ({canSeeMelody, musicKey, chordList, melody} : Props) => {
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
    abcjs.renderAbc("paper", `X:1\nM: ${topTimeSignature}/4\nL: 1/4\nK:${musicKey}\n${songConstruction}\n`);

    const onMelodyClick = () : void => {
        if (displayValue === 'none') {
            setDisplayValue('inline-block');
        } else {
            setDisplayValue('none');
        }
    }

    const printMelody = () : void => {
        const melody = document.getElementById("paper")?.innerHTML;
        const a = window.open('', '', 'height=800, width=1400');

        if (a === null) {
            //If melody cannot be printed
        } else {
            a.document.write(melody ?? '');
            a.document.close();
            a.print();
        }
    }

    return (
        <>
            <section style={sectionStyles}>
                    <span style={{...modeStyles, marginRight: '15px'}} onClick={onMelodyClick}>{displayValue === 'none' ? 'Show' : 'Hide'} Melody</span>
                    <span style={modeStyles} onClick={printMelody}>Print Melody</span>
            </section>
            <div style={paperStyles} id="paper"></div>
        </>
        

    )
};

export default ABCMusicNotation;