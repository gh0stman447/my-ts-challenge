// Решение 1

type MyPick<T extends Record<string, any>, K extends keyof T> = {
    [k in K]: T[k]
}


// Решение 2

// type MyPick<T extends Record<string, any>, K extends keyof T> = {
//     [k in keyof T as k extends K ? k : never]: T[k]
// }


// Решение 3
// type MyPick<T extends Record<string, any>, K extends keyof T> = {
//     [k in keyof T & K]: T[k]
// }

