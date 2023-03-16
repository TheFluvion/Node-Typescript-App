import { Weather, Visibility } from "./enums"


export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>


/* export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> */

//type es para variables fijas, interface es para extender dicha variable y añadirle otros valores
/* interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
} 
SpecialDiaryEntry contiene sus prodiedades MAS las propiedades de DiaryEntry
*/