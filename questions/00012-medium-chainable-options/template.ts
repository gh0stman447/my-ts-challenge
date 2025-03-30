type Overwright<T, U> = Omit<T, keyof U> & U

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<Overwright<T, {[P in K]: V}>>
  get(): T
}