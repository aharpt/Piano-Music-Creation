import { type ChordsType, NOTES_PER_CHORD, topTimeSignature } from "./musicUtils";

// The numbers in the object value arrays (i.e. 1, 2, 3) refer to the first, second, third note of the relevant chord
const melodyPattern : {[key: string]: number[]} = {
    0: [1, 2, 3],
    1: [2, 1, 3],
    2: [2, 3, 1],
};

export const beginnerMelody = (chordList : ChordsType[]) : string[] => {
    const melodyNotes : string[] = [];

    for (let i = 0; i < chordList.length; i++) {
            for (let j = 0; j < topTimeSignature; j++) {
                melodyNotes.push(NOTES_PER_CHORD[chordList[i]][(melodyPattern[i % 3][j % 3] - 1)]);
            }
    }

    return melodyNotes;
}

export const constructSong = (chordList : ChordsType[], melody: string[]) : string => {
    let notesConstruction = '';

    for (let i = 0; i < chordList.length; i++) {
        let chordLength = NOTES_PER_CHORD[chordList[i]].length;

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
                notesConstruction += melody[(i * chordLength) + (j % 3)];
            } else if (numberOfNotes === 1) {
                notesConstruction += `${melody[(i * chordLength) + (j % 3)]}4`;
            } else {
                if (j == 1) {
                    notesConstruction += `${melody[(i * chordLength) + (j % 3)]}2`;
                } else {
                    notesConstruction += melody[(i * chordLength) + (j % 3)];
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