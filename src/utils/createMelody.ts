import { type ChordsType, NOTES_PER_CHORD } from "./musicUtils";

// The numbers in the object value arrays (i.e. 1, 2, 3) refer to the first, second, third note of the relevant chord
const melodyPattern : {[key: string]: number[]} = {
    0: [1, 2, 3],
    1: [2, 1, 3],
    2: [2, 3, 1],
};

export const beginnerMelody = (chordList : ChordsType[]) : string[] => {
    const melodyNotes : string[] = [];

    for (let i = 0; i < chordList.length; i++) {
            for (let j = 0; j < NOTES_PER_CHORD[chordList[i]].length; j++) {
                melodyNotes.push(NOTES_PER_CHORD[chordList[i]][(melodyPattern[i % 3][j] - 1)]);
            }
    }

    return melodyNotes;
}

export const constructSong = (chordList : ChordsType[], melody: string[]) : string => {
    let notesConstruction = '';

    for (let i = 0; i < chordList.length; i++) {
        let chordLength = NOTES_PER_CHORD[chordList[i]].length;

        notesConstruction += `"${chordList[i]}"`
        for (let j = 0; j < chordLength; j++) {
            notesConstruction += melody[(i * chordLength) + j];
        }
        notesConstruction += '|';
    }

    return notesConstruction;
}