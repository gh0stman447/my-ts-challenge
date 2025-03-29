// Решение 1

type First<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First: never


// Решение 2

// type First<T extends unknown[]> = T extends [] ? never : T[0]