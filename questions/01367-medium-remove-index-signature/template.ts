type RemoveIndexSignature<T extends Record<PropertyKey, any>> = {

    // Если ассайнится индексной сигнатуре, то сносим
    [K in keyof T as string extends K
        ? never
        : number extends K
            ? never
            : symbol extends K
                ? never
                : K
    ]: T[K]
}
