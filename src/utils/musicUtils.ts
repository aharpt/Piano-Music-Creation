export type KeysType = "A" | "B" |  "C" | "D" | "E" | "F" | "G";
export type ChordsType = 'A' | 'Am' | 'C' | 'D' | 'G' | 'E' | 'Em';

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
    A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    F: ['F', 'G', 'A', 'B-flat', 'C', 'D', 'E'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
}

export const AVAILABLE_CHORDS : ChordsType[] = [
    'A',
    'Am',
    'C',
    'D',
    'G',
    'E',
    'Em'
];

export const NOTES_PER_CHORD : {[key in ChordsType]: string[]} = {
    A: ['A', 'C#', 'E'],
    Am: ['A', 'C', 'E'],
    C: ['C', 'E', 'G'],
    D: ['D', 'F#', 'A'],
    G: ['G', 'B', 'D'],
    E: ['E', 'G#', 'B'],
    Em: ['E', 'G', 'B'],
}