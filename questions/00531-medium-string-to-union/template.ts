
// for '' => return never
type StringToUnion<T extends string> = 
    T extends `${infer First}${infer Rest}`
        ? First | StringToUnion<Rest>
        : never



// for '' -> return ''
// type StringToUnion<T extends string, Arr extends string[] = [], IsEmpty extends boolean = true> = 
//   T extends `${infer First}${infer Rest}`
//     ? StringToUnion<Rest, [...Arr, First], false>
//     : IsEmpty extends true 
//         ? ''
//         : Arr[number]


