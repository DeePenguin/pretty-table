import { Pipe, type PipeTransform } from '@angular/core'

import type { ColumnConfig } from '../models/columns-config.model'

@Pipe({
  name: 'visibleColumns',
})
export class VisibleColumnsPipe implements PipeTransform {
  public transform(columnsConfig: Record<string, ColumnConfig>): string[] {
    return Object.entries(columnsConfig)
      .filter(({ 1: { isVisible } }) => isVisible)
      .map(({ 0: name }) => name)
  }
}
