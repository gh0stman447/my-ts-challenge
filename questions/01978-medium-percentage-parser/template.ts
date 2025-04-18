type PercentageParser<A extends string, Arr extends string[] = ['', '', '']> =
    A extends '' 
        ? Arr
        : A extends `-${infer Rest}`
            ? PercentageParser<Rest, ['-', '', '']>
            : A extends `+${infer Rest}`
                ? PercentageParser<Rest, ['+', '', '']>
                : A extends `${infer Number extends number}${infer Rest}`
                    ? PercentageParser<Rest, [Arr[0], `${Arr[1]}${Number}`, '']>
                    : A extends `%${infer Rest}`
                        ? PercentageParser<Rest, [Arr[0], Arr[1], '%']>
                        : Arr
