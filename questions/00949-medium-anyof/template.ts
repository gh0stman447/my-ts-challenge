
// Решение 1

// type AnyOf<T extends readonly any[]> = T[number] extends FalsyValues ? false: true


// Решение 2

type AnyOf<T extends readonly any[]> = 
    T extends [infer First, ...infer Rest]
    ? First extends FalsyValues ? AnyOf<Rest> : true
    : false


type FalsyValues = 0 | '' | null | undefined | [] | {[key: string]: never}  | false
