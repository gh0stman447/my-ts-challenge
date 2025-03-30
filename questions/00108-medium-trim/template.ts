type Trim<S extends string> = 
    S extends ` ${infer R}` | `\n${infer R}` | `\t${infer R}`
    ? Trim<R> 
    : S extends `${infer R} ` | `${infer R}\n` | `${infer R}\t`
        ? Trim<R> 
        : S