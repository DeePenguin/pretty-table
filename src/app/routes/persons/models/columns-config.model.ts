export interface ColumnConfig {
  label?: string
  type?: string
  isSticky?: boolean
  isSortable?: boolean
  isVisible: boolean
}

export type ColumnsConfig<T> = Record<keyof T & string, ColumnConfig>
