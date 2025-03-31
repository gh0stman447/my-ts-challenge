type KebabCase<S extends string> = 
    S extends `${infer First}${infer Rest}`
        ? `${Lowercase<First>}${Rest extends Uncapitalize<Rest>
            ? '' 
            : '-'}${KebabCase<Rest>}`
        : S
