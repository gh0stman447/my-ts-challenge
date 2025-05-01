
// // Решение 1
// type Compute<T> = {[Key in keyof T]: T[Key]}

// type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = Compute<Omit<T, K> & Partial<Pick<T, K>>>



// Решение 2
type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = {
    [Key in keyof T as Key extends K ? never: Key]: T[Key]
} & {
    [Key in K]?: T[Key] 
} extends infer O ? { [P in keyof O]: O[P] } : never
