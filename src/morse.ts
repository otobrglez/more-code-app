import {CSV} from './morse.csv'

type InputChar = string
type MorseCode = string
type MorseTable = Map<InputChar, MorseCode>
export type MorseSeq = [char: InputChar, code: MorseCode | undefined]

const mkMorseTable = (csv: string[][]): MorseTable => new Map(csv as any);

export const rawToCode = (morseTable: MorseTable, raw: string): MorseSeq => 
  ((raw.split('') || [])
    .map(c => c.toUpperCase())
    .map(c => [c, morseTable.get(c)]) as unknown) as MorseSeq;

export const morseTable:MorseTable = mkMorseTable(CSV);
