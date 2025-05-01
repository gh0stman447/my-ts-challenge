
type FlattenDepth<Arr extends unknown[], Depth extends number = 1, CurrentDepth extends unknown[] = []> = 
    CurrentDepth['length'] extends Depth
        ? Arr
        : Arr extends [infer First, ...infer Rest]
            ? [
                ...(First extends unknown[]
                    ? FlattenDepth<First, Depth, [...CurrentDepth, unknown]>
                    : [First]),
                ...FlattenDepth<Rest, Depth, CurrentDepth>
            ]
            : []
