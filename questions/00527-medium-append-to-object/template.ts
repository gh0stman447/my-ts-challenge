type AppendToObject<Obj extends Record<string, any>, Key extends string, Value> = {
    [K in keyof Obj | Key]: K extends keyof Obj ? Obj[K] : Value 
}
