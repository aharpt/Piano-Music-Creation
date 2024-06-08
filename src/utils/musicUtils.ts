export type KeysType = "A" | "B" |  "C" | "D" | "E" | "F" | "G";
export type ChordsType = 'A' | 'Am' | 'C' | 'D' | 'Dm' | 'E' | 'Em' | 'F' | 'G' | 'Gm'; 

export const MUSIC_KEYS : KeysType[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
];

export const MUSIC_NOTES_PER_KEY : {[key in KeysType]: string[]} = {
    A: ['A', 'B', '^C', 'D', 'E', '^F', '^G'],
    B: ['B', '^C', '^D', 'E', '^F', '^G', '^A'],
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    D: ['D', 'E', '^F', 'G', 'A', 'B', '^C'],
    E: ['E', '^F', '^G', 'A', 'B', '^C', '^D'],
    F: ['F', 'G', 'A', '_B', 'C', 'D', 'E'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', '^F'],
}

export const AVAILABLE_CHORDS : ChordsType[] = [
    'A',
    'Am',
    'C',
    'D',
    'Dm',
    'E',
    'Em',
    'F',
    'G',
    'Gm',
];

export const NOTES_PER_CHORD : {[key in ChordsType]: string[]} = {
    A: ['A', '^C', 'E'],
    Am: ['A', 'C', 'E'],
    C: ['C', 'E', 'G'],
    D: ['D', '^F', 'A'],
    Dm: ['D', 'F', 'A'],
    E: ['E', '^G', 'B'],
    Em: ['E', 'G', 'B'],
    F: ['F', 'A', 'C'],
    G: ['G', 'B', 'D'],
    Gm: ['G', '_B', 'D'],
}

export const topTimeSignature = 4;

export const convertMusicNotesPerKey = (key : string[]) : string[] => {
        return key.map(note => {
            if (note[0] === '^') {
                return (note[1] + "#");
            } else if (note[0] === '_') {
                return (note[1] + "-flat");
            } else {
                return note;
            }
        });
}

export const convertChordNotes = (chord : string[]) : string[] => {
    return chord.map(note => {
        if (note[0] === '^') {
            return (note[1] + "#");
        } else if (note[0] === '_') {
            return (note[1] + "-flat");
        } else {
            return note;
        }
    });
}

export const convertMelodyNotes = (melody : string[]) : string[] => {
    return melody.map(note => {
        if (note[0] === '^') {
            return (note[1] + "#");
        } else if (note[0] === '_') {
            return (note[1] + "-flat");
        } else {
            return note;
        }
    });
}