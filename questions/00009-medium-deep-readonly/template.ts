type DeepReadonly<T extends Record<string, any>> = T extends Function ? T : {
  readonly [k in keyof T]: T[k] extends Record<string, any> ? DeepReadonly<T[k]>: T[k]
}


type X1 = {
    a: () => 22
    b: string
    c: {
      d: boolean
      e: {
        g: {
          h: {
            i: true
            j: 'string'
          }
          k: 'hello'
        }
        l: [
          'hi',
          {
            m: ['hey']
          },
        ]
      }
    }
  }
