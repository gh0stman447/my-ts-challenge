type ReplaceKeys<U extends Record<string, unknown>, T extends unknown, Y extends Record<string, any>> = {
    [K in keyof U]: 
        K extends  T 
        ? K extends keyof Y
            ? Y[K]
            : never
        : U[K]
}
