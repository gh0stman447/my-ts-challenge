type Flatten<T extends any[], Arr extends any[] = []> = 
    T extends [infer First, ...infer Rest]
        ? First extends any[]
            ? Flatten<[...First, ...Rest], Arr >
            : Flatten<Rest, [...Arr, First]>
        : Arr

        type Lel = Flatten<[1, [2], [[3]]]>
