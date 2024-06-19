import { type ChordsType, topTimeSignature, BEGINNER_MELODY_PER_CHORD } from "./musicUtils";

export const beginnerMelody = (chordList : ChordsType[]) : string[] => {
    const melodyNotes : string[] = [];
    let upMelody : boolean = true;

    for (let i = 0; i < chordList.length; i++) {
            for (let j = 0; j < topTimeSignature; j++) {
                switch (chordList[i]) {
                    case 'A':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['A_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['A_Down'][j]);
                        break;
                    case 'Am':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Am_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Am_Down'][j]);
                        break;
                    case 'Asus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Asus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Asus_Down'][j]);
                        break;
                    case 'B':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['B_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['B_Down'][j]);
                        break;
                    case 'Bm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Bm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Bm_Down'][j]);
                        break;
                    case 'Bsus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Bsus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Bsus_Down'][j]);
                        break;
                    case 'C':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['C_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['C_Down'][j]);
                        break;
                    case 'Cm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Cm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Cm_Down'][j]);
                        break;
                    case 'Csus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Csus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Csus_Down'][j]);
                        break;
                    case 'D':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['D_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['D_Down'][j]);
                        break;
                    case 'Dm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dm_Down'][j]);
                        break;
                    case 'Dsus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dsus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dsus_Down'][j]);
                        break;
                    case 'E':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['E_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['E_Down'][j]);
                        break;
                    case 'Em':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Em_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Em_Down'][j]);
                        break;
                    case 'Esus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Esus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Esus_Down'][j]);
                        break;
                    case 'F':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['F_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['F_Down'][j]);
                        break;
                    case 'Fm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Fm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Fm_Down'][j]);
                        break;
                    case 'Fsus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Fsus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Fsus_Down'][j]);
                        break;
                    case 'G':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['G_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['G_Down'][j]);
                        break;
                    case 'Gm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gm_Down'][j]);
                        break;
                    case 'Gsus':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gsus_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gsus_Down'][j]);
                        break;
                    default:
                        break;
                }
            }
            upMelody = !upMelody;
    }

    return melodyNotes;
}

export const constructSong = (chordList : ChordsType[], melody: string[], notesList : number[]) : string => {
    let notesConstruction = '';

    let melodyIdx = 0;
    for (let i = 0; i < chordList.length; i++) {
        notesConstruction += `"${chordList[i]}"`;
        let numberOfNotes = notesList[i];

        for (let j = 0; j < numberOfNotes; j++) {
            if (numberOfNotes === 4) {
                notesConstruction += melody[melodyIdx];
                melodyIdx++;
            } else if (numberOfNotes === 1) {
                notesConstruction += `${melody[melodyIdx]}4`;
                melodyIdx += 4;
            } else {
                if (numberOfNotes === 2) {
                    notesConstruction += `${melody[melodyIdx]}2`;
                    melodyIdx += 2;
                } else if (numberOfNotes === 3) {
                    if (j === 1) {
                        notesConstruction += `${melody[melodyIdx]}2`;
                        melodyIdx += 2;
                    } else {
                        notesConstruction += melody[melodyIdx];
                        melodyIdx++;
                    }
                }

            }
        }
        if (i === (chordList.length - 1)) { 
            notesConstruction += '|]';
        } else {
            notesConstruction += '|';
        }
    }

    return notesConstruction;
}