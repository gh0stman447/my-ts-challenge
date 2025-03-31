type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
    [K in keyof F | keyof S]: 
        K extends keyof F 
            ? K extends keyof S 
                ? S[K]
                : F[K]
            : K extends keyof S
                ? S[K]
                : never
}



type Foo = {
    a: number
    b: string
  }

  type Bar = {
    b: number
    c: boolean
  }




type MERGED = Merge<Foo, Bar>