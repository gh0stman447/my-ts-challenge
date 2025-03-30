// type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : never

type Last<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest extends [] ? First : Last<Rest> : never


type R5 = Last<[1, 2, 3, 4]>