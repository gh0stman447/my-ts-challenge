type ObjectEntries<T extends Record<string, any>> = {
    [K in keyof T]-?: [K, T[K]]
}[keyof T]
