type Permutation<T, U = T> = [T] extends [never] 
    ? []
    : U extends infer R
        ? [R, ...Permutation<Exclude<T, R>>]
        : never 
        let a1: {} = 42; // OK
