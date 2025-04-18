
// Решение 1, но ограничение на глубину рекурсии в 1000 итераций

type MinusOne<T extends number, Arr extends unknown[] = []> = 
    [...Arr, unknown]['length'] extends T
        ? Arr['length']
        : MinusOne<T, [...Arr, unknown]>




// type BuildTuple<N extends number, T extends any[] = []> = T['length'] extends N ? T : BuildTuple<N, [...T, 1]>;

// type MinusOne<T extends number> = BuildTuple<T> extends [infer First, ...infer Rest] ? Rest['length'] : never;
