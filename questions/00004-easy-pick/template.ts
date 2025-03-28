type MyPick<T extends Record<string, any>, K extends keyof T> = {
[k in K]: T[k]
}

