
type LengthOfString<S extends string, Acc extends any[] = []> = 
    S extends `${string}${infer Rest}`
    ? LengthOfString<Rest, [...Acc, any]>
    : Acc['length']
