type First<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First: never
