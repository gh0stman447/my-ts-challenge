

type Reverse2<T extends string> = T extends `${infer First}${infer Rest}` ? `${Reverse2<Rest>}${First}` : T 

// Решение 1
// type EndsWith<T extends string, U extends string> = T extends `${infer Prefix}${U}`


// Решение 2
type EndsWith<T extends string, U extends string> = StartsWith<Reverse2<T>, Reverse2<U>>
