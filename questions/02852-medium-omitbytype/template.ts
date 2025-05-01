
// 1 Решение
// type OmitByType<T extends Record<string, any>, U> = {
//     [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
// }

// 2 Решение
type OmitByType<T extends Record<string, any>, U> = 
    Pick<T, {[Key in keyof T]: T[Key] extends U ? never : T[Key]}[keyof T]>

