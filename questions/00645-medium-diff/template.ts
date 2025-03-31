// type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
//     [K in keyof O | keyof O1]: 
//         K extends keyof O & keyof O1
//             ? never
//             :  K extends keyof O
//                 ? O[K]
//                 : never
        
// }


type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
    [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: 
        K extends keyof O
         ? O[K] 
         : K extends keyof O1 
            ? O1[K]
            : never
}

type lweflwe = Diff<{
    name: string
    age: string,
  }, {
    name: string
    gender: number
  }
>

type qwd = 1 extends (1| 2| 3)  & 1? true:false