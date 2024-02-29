import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import type { ColumnsConfig } from '../../models/columns-config.model'

@Component({
  selector: 'pt-table-columns-visibility-modal',
  templateUrl: './table-columns-visibility-modal.component.html',
  styleUrls: ['./table-columns-visibility-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColumnsVisibilityModalComponent<T> {
  public columns = JSON.parse(JSON.stringify(this.data.columnsConfig)) as ColumnsConfig<T>

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { columnsConfig: ColumnsConfig<T> },
    private dialogRef: MatDialogRef<TableColumnsVisibilityModalComponent<T>>,
  ) {}

  public trackByKey(_: number, { key }: { key: string }): string {
    return key
  }

  public save(): void {
    this.dialogRef.close(this.columns)
  }
}
