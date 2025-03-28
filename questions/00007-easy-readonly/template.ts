type MyReadonly< T extends Record<string, unknown>> ={
     [k in keyof T]-?: T[k]
}

type R = MyReadonly<{lol?: 3; kek: '123'}>