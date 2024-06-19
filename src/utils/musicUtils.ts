export type KeysType = "A" | "B" |  "C" | "D" | "E" | "F" | "G";
export type ChordsType = 'A' | 'Am' | 'C' | 'D' | 'Dm' | 'E' | 'Em' | 'F' | 'G' | 'Gm'; 
type BeginnerMelodyType = 
        | 'A_Up' | 'A_Down' | 'Am_Up' | 'Am_Down' | 'C_Up' | 'C_Down' | 'D_Up' | 'D_Down' | 'Dm_Up' | 'Dm_Down'
        | 'E_Up' | 'E_Down' | 'Em_Up' | 'Em_Down' | 'F_Up' | 'F_Down' | 'G_Up' | 'G_Down' | 'Gm_Up' | 'Gm_Down'; 

type PassingMelodyType = 
        // | 'AUp_GDown' | 'A_Down' | 'Am_Up' | 'Am_Down'
        | 'CDown_FUp'
        |'DmDown_GmUp'
        // | 'E_Up' | 'E_Down' | 'Em_Up' | 'Em_Down'
        | 'FUp_DmDown'
        | 'GmUp_CDown'; 

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

export const BEGINNER_MELODY_PER_CHORD : {[key in BeginnerMelodyType]: string[]} = {
    A_Up: ['A', '^c', 'e', 'a'],
    A_Down: ['a', 'e', '^c', 'A'],
    Am_Up: ['A', 'c', 'e', 'a'],
    Am_Down: ['a', 'e', 'c', 'A'],
    C_Up: ['C', 'E', 'G', 'c'],
    C_Down: ['c', 'G', 'E', 'C'],
    D_Up: ['D', '^F', 'A', 'd'],
    D_Down: ['d', 'A', '^F', 'D'],
    Dm_Up: ['D', 'F', 'A', 'd'],
    Dm_Down: ['d', 'A', 'F', 'D'],
    E_Up: ['E', '^G', 'B', 'e'],
    E_Down: ['e', 'B', '^G', 'E'],
    Em_Up: ['E', 'G', 'B', 'e'],
    Em_Down: ['e', 'B', 'G', 'E'],
    F_Up: ['F', 'A', 'c', 'f'],
    F_Down: ['f', 'c', 'A', 'F'],
    G_Up: ['G', 'B', 'D', 'g'],
    G_Down: ['g', 'D', 'B', 'G'],
    Gm_Up: ['G', '_B', 'D', 'g'],
    Gm_Down: ['g', 'D', '_B', 'G'],
}

export const PASSING_MELODY_PER_CHORD : {[key in PassingMelodyType]: string[]} = {
    CDown_FUp: ['c', 'G', 'E', 'C'],
    DmDown_GmUp: ['d', 'c', 'A', 'F'],
    FUp_DmDown: ['F', 'A', 'c', 'f'],
    GmUp_CDown: ['G', '_B', 'g', 'd'],
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