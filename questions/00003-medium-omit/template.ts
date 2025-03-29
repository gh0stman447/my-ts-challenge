// Решение 1

// type MyOmit<T extends Record<string, any>, K extends keyof T> = {
//     [k in keyof T as Exclude<k, K>]: T[k] 
// }

// Решение 2

type MyOmit<T extends Record<string, any>, K extends keyof T> = {
    [k in keyof T as k extends K ? never: k]: T[k] 
}
