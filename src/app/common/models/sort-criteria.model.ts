export interface SortCriteria<T> {
  key: keyof T
  direction: 1 | -1
}
