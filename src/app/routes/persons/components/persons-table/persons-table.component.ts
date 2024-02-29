import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  type OnDestroy,
  type OnInit,
  ViewChild,
} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { debounceTime, distinctUntilChanged, map, Subscription } from 'rxjs'

import { columnsConfig } from '../../constants/columns-config'
import { PersonsTableService } from '../../services/persons-table.service'
import { TableColumnsVisibilityModalComponent } from '../table-columns-visibility-modal/table-columns-visibility-modal.component'
import { isKeySortable } from 'src/app/repositories/persons/helpers/is-key-sortable.helper'
import { sortPersons } from 'src/app/repositories/persons/helpers/sort-persons.helper'
import { type PersonSortableKeys } from 'src/app/repositories/persons/models/person-sortable-keys.model'
import type { Person } from 'src/app/repositories/persons/models/person.model'
import type { ColumnsConfig } from 'src/app/routes/persons/models/columns-config.model'

@Component({
  selector: 'pt-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss'],
  providers: [PersonsTableService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscriptions = new Subscription()
  public search = this.fb.control('')
  public columnsConfig: ColumnsConfig<Person> = columnsConfig
  public paginationOptions = [5, 10, 25]
  public tableDataSource = new MatTableDataSource<Person>()

  @ViewChild(MatPaginator) public paginator: MatPaginator | null = null
  @ViewChild(MatSort) public sort!: MatSort

  constructor(
    private personsTableService: PersonsTableService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.tableDataSource.sortData = this.sortPersons()
    this.subscriptions.add(
      this.personsTableService.persons$.pipe().subscribe(persons => {
        this.tableDataSource.data = persons
      }),
    )

    this.subscriptions.add(
      this.search.valueChanges
        .pipe(
          debounceTime(600),
          map(query => query?.trim() || null),
          distinctUntilChanged(),
        )
        .subscribe(query => {
          this.personsTableService.search(query)
          this.paginator?.firstPage()
        }),
    )
  }

  public ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.paginator
    this.tableDataSource.sort = this.sort
  }

  public sortPersons() {
    return (data: Person[], sort: MatSort): Person[] => {
      const key: PersonSortableKeys | null = isKeySortable(sort.active) ? sort.active : null

      if (!key || !sort.direction) {
        return data
      }

      const direction = sort.direction === 'asc' ? 1 : -1

      return sortPersons(data, { key, direction })
    }
  }

  public openColumnsVisibilityDialog(): void {
    this.dialog
      .open(TableColumnsVisibilityModalComponent<Person>, {
        data: { columnsConfig: this.columnsConfig },
      })
      .afterClosed()
      .subscribe((updatedColumnsConfig?: ColumnsConfig<Person>) => {
        if (updatedColumnsConfig) {
          this.columnsConfig = updatedColumnsConfig
          this.cdr.detectChanges()
        }
      })
  }

  public trackByKey(_: number, { key }: { key: string }): string {
    return key
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
