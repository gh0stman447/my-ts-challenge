type TupleToNestedObject<T extends string[], U> = 
    T extends []
        ? U
        : T extends [infer First extends string, ...infer Rest extends string[]]
            ? {[K in First]: TupleToNestedObject<Rest, U>}
            : never
