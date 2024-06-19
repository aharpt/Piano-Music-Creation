export type KeysType = "A" | "B" |  "C" | "D" | "E" | "F" | "G";
export type ChordsType = 
        | 'A' | 'Am' | 'Asus' | 'B' | 'Bm' | 'Bsus'
        | 'C' | 'Cm' | 'Csus' | 'D' | 'Dm' | 'Dsus'
        | 'E' | 'Em' | 'Esus' | 'F' | 'Fm' | 'Fsus'
        | 'G' | 'Gm' | 'Gsus'; 
export type MelodyType = 
        | 'A_Up' | 'A_Down' | 'Am_Up' | 'Am_Down' | 'Asus_Up' | 'Asus_Down'
        | 'B_Up' | 'B_Down' | 'Bm_Up' | 'Bm_Down' | 'Bsus_Up' | 'Bsus_Down'
        | 'C_Up' | 'C_Down' | 'Cm_Up' | 'Cm_Down' | 'Csus_Up' | 'Csus_Down'
        | 'D_Up' | 'D_Down' | 'Dm_Up' | 'Dm_Down' | 'Dsus_Up' | 'Dsus_Down'
        | 'E_Up' | 'E_Down' | 'Em_Up' | 'Em_Down' | 'Esus_Up' | 'Esus_Down'
        | 'F_Up' | 'F_Down' | 'Fm_Up' | 'Fm_Down' | 'Fsus_Up' | 'Fsus_Down'
        | 'G_Up' | 'G_Down' | 'Gm_Up' | 'Gm_Down' | 'Gsus_Up' | 'Gsus_Down'; 

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
    'Asus',
    'B',
    'Bm',
    'Bsus',
    'C',
    'Cm',
    'Csus',
    'D',
    'Dm',
    'Dsus',
    'E',
    'Em',
    'Esus',
    'F',
    'Fm',
    'Fsus',
    'G',
    'Gm',
    'Gsus',
];

export const NOTES_PER_CHORD : {[key in ChordsType]: string[]} = {
    A: ['A', '^C', 'E'],
    Am: ['A', 'C', 'E'],
    Asus: ['A', 'D', 'E'],
    B: ['B', '^D', '^F'],
    Bm: ['B', 'D', '^F'],
    Bsus: ['B', 'E', '^F'],
    C: ['C', 'E', 'G'],
    Cm: ['C', '_E', 'G'],
    Csus: ['C', 'F', 'G'],
    D: ['D', '^F', 'A'],
    Dm: ['D', 'F', 'A'],
    Dsus: ['D', 'G', 'A'],
    E: ['E', '^G', 'B'],
    Em: ['E', 'G', 'B'],
    Esus: ['E', 'A', 'B'],
    F: ['F', 'A', 'C'],
    Fm: ['F', '^A', 'C'],
    Fsus: ['F', 'B', 'C'],
    G: ['G', 'B', 'D'],
    Gm: ['G', '_B', 'D'],
    Gsus: ['G', 'C', 'D'],
}

export const BEGINNER_MELODY_PER_CHORD : {[key in MelodyType]: string[]} = {
    A_Up: ['A,', '^C', 'E', 'A'],
    A_Down: ['A', 'E', '^C', 'A,'],
    Am_Up: ['A,', 'C', 'E', 'A'],
    Am_Down: ['A', 'E', 'C', 'A,'],
    Asus_Up: ['A,', 'D', 'E', 'A'],
    Asus_Down: ['A', 'E', 'D', 'A,'],
    B_Up: ['B,', '^D', '^F', 'B'],
    B_Down: ['B', '^F', '^D', 'B,'],
    Bm_Up: ['B,', 'D', '^F', 'B'],
    Bm_Down: ['B', '^F', 'D', 'B,'],
    Bsus_Up: ['B,', 'E', '^F', 'B'],
    Bsus_Down: ['B', '^F', 'E', 'B,'],
    C_Up: ['C', 'E', 'G', 'c'],
    C_Down: ['c', 'G', 'E', 'C'],
    Cm_Up: ['C', '_E', 'G', 'c'],
    Cm_Down: ['c', 'G', '_E', 'C'],
    Csus_Up: ['C', 'F', 'G', 'c'],
    Csus_Down: ['c', 'G', 'F', 'C'],
    D_Up: ['D', '^F', 'A', 'd'],
    D_Down: ['d', 'A', '^F', 'D'],
    Dm_Up: ['D', 'F', 'A', 'd'],
    Dm_Down: ['d', 'A', 'F', 'D'],
    Dsus_Up: ['D', 'G', 'A', 'd'],
    Dsus_Down: ['d', 'A', 'G', 'D'],
    E_Up: ['E', '^G', 'B', 'e'],
    E_Down: ['e', 'B', '^G', 'E'],
    Em_Up: ['E', 'G', 'B', 'e'],
    Em_Down: ['e', 'B', 'G', 'E'],
    Esus_Up: ['E', 'A', 'B', 'e'],
    Esus_Down: ['e', 'B', 'A', 'E'],
    F_Up: ['F', 'A', 'c', 'f'],
    F_Down: ['f', 'c', 'A', 'F'],
    Fm_Up: ['F', '^A', 'C', 'f'],
    Fm_Down: ['f', 'C', '^A', 'F'],
    Fsus_Up: ['F', 'B', 'C', 'f'],
    Fsus_Down: ['f', 'C', 'B', 'F'],
    G_Up: ['G', 'B', 'D', 'g'],
    G_Down: ['g', 'D', 'B', 'G'],
    Gm_Up: ['G', '_B', 'd', 'g'],
    Gm_Down: ['g', 'd', '_B', 'G'],
    Gsus_Up: ['G', 'c', 'd', 'g'],
    Gsus_Down: ['g', 'd', 'c', 'G'],
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