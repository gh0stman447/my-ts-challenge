type AppendArgument<Fn extends (...arg: any[]) => any, Arg> = 
    Fn extends (...arg: infer Args) => infer Return
        ? (...args: [...Args, Arg]) => Return
        : Fn

type R8 = AppendArgument<(a: number, b: string) => number, boolean>