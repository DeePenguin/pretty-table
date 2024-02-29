export type SortMap<T> = Record<keyof T & string, (a: T, b: T) => number>
