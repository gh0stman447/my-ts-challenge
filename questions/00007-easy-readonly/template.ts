type MyReadonly< T extends Record<string, unknown>> = {
     [k in keyof T]-?: T[k]
}
