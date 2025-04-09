type Diff<O, O1> = {
    [K in Exclude<keyof (O & O1), keyof (O | O1)>]: 
      (O & O1)[K]
  }

type lweflwe = Diff<{
    name: string
    age: string,
  }, {
    name: string
    gender: number
  }
>

