type Shift<T extends unknown[]> = 
    T extends []
        ? []
        : T extends [infer First, ...infer Rest] 
            ? Rest
            : never


type qwew = Shift<[]>