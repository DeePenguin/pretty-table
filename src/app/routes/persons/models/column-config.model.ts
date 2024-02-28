export interface ColumnConfig<T> {
  name: keyof T & string
  label?: string
  type?: string
  isSticky?: boolean
  isSortable?: boolean
}
