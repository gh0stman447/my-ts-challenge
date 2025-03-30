type TrimLeft<S extends string> = 
    S extends ` ${infer R}` | `\n${infer R}` | `\t${infer R}`
        ? TrimLeft<R>
        : S