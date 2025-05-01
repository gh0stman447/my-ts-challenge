type Reverse3<T extends unknown[], Arr extends unknown[] = []> = 
    T extends [...infer Rest , infer Last]
        ? Reverse3<Rest, [...Arr, Last]>
        : Arr

        
type FlipArguments<T extends (...args: any[]) => unknown> = (...args: Reverse3<Parameters<T>>) => ReturnType<T>




type safsd = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>