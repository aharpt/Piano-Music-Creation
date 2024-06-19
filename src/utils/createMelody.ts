import { type ChordsType, topTimeSignature, BEGINNER_MELODY_PER_CHORD, PASSING_MELODY_PER_CHORD } from "./musicUtils";

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
                    case 'C':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['C_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['C_Down'][j]);
                        break;
                    case 'D':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['D_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['D_Down'][j]);
                        break;
                    case 'Dm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Dm_Down'][j]);
                        break;
                    case 'E':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['E_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['E_Down'][j]);
                        break;
                    case 'Em':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Em_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Em_Down'][j]);
                        break;
                    case 'F':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['F_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['F_Down'][j]);
                        break;
                    case 'G':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['G_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['G_Down'][j]);
                        break;
                    case 'Gm':
                        upMelody ? melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gm_Up'][j]) : melodyNotes.push(BEGINNER_MELODY_PER_CHORD['Gm_Down'][j]);
                        break;
                    default:
                        break;
                }
            }
            upMelody = !upMelody;
    }

    return melodyNotes;
}

export const passingMelody = (chordList : ChordsType[]) : string[] => {
    const melodyNotes : string[] = [];
    let upMelody : boolean = true;

    for (let i = 0; i < chordList.length; i++) {
        for (let j = 0; j < topTimeSignature; j++) {
            switch (chordList[i]) {
                case 'A':
                    break;
                case 'Am':
                    break;
                case 'C':
                    melodyNotes.push(PASSING_MELODY_PER_CHORD['CDown_FUp'][j]);
                    break;
                case 'D':
                    break;
                case 'Dm':
                    melodyNotes.push(PASSING_MELODY_PER_CHORD['DmDown_GmUp'][j]);
                    break;
                case 'E':
                    break;
                case 'Em':
                    break;
                case 'F':
                    melodyNotes.push(PASSING_MELODY_PER_CHORD['FUp_DmDown'][j]);
                    break;
                case 'G':
                    break;
                case 'Gm':
                    melodyNotes.push(PASSING_MELODY_PER_CHORD['GmUp_CDown'][j]);
                    break;
                default:
                    break;
            }
        }
        upMelody = !upMelody;
    }
    return melodyNotes;
}

export const constructSong = (chordList : ChordsType[], melody: string[]) : string => {
    let notesConstruction = '';

    let melodyIdx = 0;
    for (let i = 0; i < chordList.length; i++) {

        notesConstruction += `"${chordList[i]}"`;
        let numberOfNotes;
        if (i === 0 || (i+2) === chordList.length) {
            numberOfNotes = 4;
        } else if ((i+1) === chordList.length) {
            numberOfNotes = 1;
        } else {
            numberOfNotes = 3;
        }

        for (let j = 0; j < numberOfNotes; j++) {
            if (numberOfNotes === 4) {
                notesConstruction += melody[melodyIdx];
                melodyIdx++;
            } else if (numberOfNotes === 1) {
                notesConstruction += `${melody[melodyIdx]}4`;
                melodyIdx += 4;
            } else {
                if (j === 1) {
                    notesConstruction += `${melody[melodyIdx]}2`;
                    melodyIdx += 2;
                } else {
                    notesConstruction += melody[melodyIdx];
                    melodyIdx++;
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