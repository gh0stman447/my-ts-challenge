type Mutable<T extends Record<string, any>> = {
    -readonly [Key in keyof T]: T[Key]
}

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
      author: string
    }
  }

type Test = Mutable<Readonly<Todo1>>