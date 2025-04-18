type PickByType<T extends Record<string, any>, U extends T[keyof T]> = {
    [K in keyof T as U extends T[K] ? K: never]: T[K]
} 

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}
