
type DropChar<S extends string, C extends string> = C extends ''
    ? never
    : S extends `${infer First}${infer Rest}`
        ? First extends C
            ? DropChar<Rest, C>
            : `${First}${DropChar<Rest, C>}`
        :S
