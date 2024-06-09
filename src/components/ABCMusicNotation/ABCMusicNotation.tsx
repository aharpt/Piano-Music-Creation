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
    const [playBtnDisplay, setPlayBtnDisplay] = React.useState<DisplayType>('inline-block');
    const [stopBtnDisplay, setStopBtnDisplay] = React.useState<DisplayType>('none');
    const [midiBuffer] = React.useState<abcjs.MidiBuffer>(new abcjs.synth.CreateSynth());

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
    const visualObj = abcjs.renderAbc("paper", `X:1\nM: ${topTimeSignature}/4\nL: 1/4\nK:${musicKey}\n${songConstruction}\n`);

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

    const playAudio = (withChords : boolean) => {
        if (abcjs.synth.supportsAudio()) {
            setPlayBtnDisplay('none');
            setStopBtnDisplay('inline-block');

            const audioContext = new window.AudioContext();
            audioContext.resume().then(function () {

                return midiBuffer.init({
                    visualObj: visualObj[0],
                    options: {
                        chordsOff: !withChords,
                    },
                    audioContext: audioContext,
                    millisecondsPerMeasure: visualObj[0].millisecondsPerMeasure(),
                }).then(function (response) {
                    console.log("Notes loaded: ", response)
                    return midiBuffer.prime();
                }).then(function (response) {
                    midiBuffer.start();
                    return Promise.resolve();
                }).catch(function (error) {
                    console.log("Err: ", error);
                });
            });

            if (audioContext.state === 'closed') {
                setPlayBtnDisplay('inline-block');
                setStopBtnDisplay('none');
            }
        }
    }

    const stopAudio = () => {
        if (midiBuffer) {
            setPlayBtnDisplay('inline-block');
            setStopBtnDisplay('none');
            midiBuffer.stop();
        }
    }

    return (
        <>
            <section style={sectionStyles}>
                    <span style={{...modeStyles, marginRight: '15px'}} onClick={onMelodyClick}>{displayValue === 'none' ? 'Show' : 'Hide'} Melody</span>
                    <span style={modeStyles} onClick={printMelody}>Print Melody</span>
            </section>
            <section style={sectionStyles}>
                <button style={{display: playBtnDisplay}} onClick={() => playAudio(false)}>Play Melody Only (without chords)</button>
                <button style={{display: playBtnDisplay}} onClick={() => playAudio(true)}>Play With Chords</button>
				<button style={{display: stopBtnDisplay}} onClick={stopAudio}>Stop Audio</button>
            </section>
            <div style={paperStyles} id="paper"></div>
        </>
        

    )
};

export default ABCMusicNotation;