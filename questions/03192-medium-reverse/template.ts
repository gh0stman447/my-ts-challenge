type Reverse<T extends string[], Arr extends string[] = []> = 
    T extends [...infer Rest extends string[], infer Last extends string]
        ? Reverse<Rest, [...Arr, Last]>
        : Arr
