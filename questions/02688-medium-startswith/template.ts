
// Решение 1

// type StartsWith<T extends string, U extends string> = 
//     U extends `${infer First}${infer Rest}` 
//     ? T extends `${infer _First}${infer _Rest}`
//         ? First extends _First
//             ? StartsWith<_Rest, Rest>
//             : false
//         : false
//     : true


// Решение 2
type StartsWith<T extends string, U extends string> = T extends `${U}${infer Suffix}` ? true : false