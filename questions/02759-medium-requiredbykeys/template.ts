type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
} & {
    [Key in K]-?: T[Key] 
} extends infer O ? {[Key in keyof O]: O[Key]}: never


interface User {
    name?: string
    age?: number
    address?: string
  }

type Type = RequiredByKeys<User, 'address'>