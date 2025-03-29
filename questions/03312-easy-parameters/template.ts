type MyParameters<T extends (...args: any[]) => any> = Parameters<T>
