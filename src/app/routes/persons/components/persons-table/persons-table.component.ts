import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  type OnDestroy,
  type OnInit,
  ViewChild,
} from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { debounceTime, distinctUntilChanged, map, Subscription } from 'rxjs'

import { PersonsTableService } from '../../services/persons-table.service'
import { isKeySortable } from 'src/app/repositories/persons/helpers/is-key-sortable.helper'
import { sortPersons } from 'src/app/repositories/persons/helpers/sort-persons.helper'
import { type PersonSortableKeys } from 'src/app/repositories/persons/models/person-sortable-keys.model'
import type { Person } from 'src/app/repositories/persons/models/person.model'
import type { ColumnConfig } from 'src/app/routes/persons/models/column-config.model'

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

  public columnsConfig: Array<ColumnConfig<Person>> = [
    { name: 'name', label: 'Name', isSticky: true },
    { name: 'isActive', label: 'Activity', type: 'activity' },
    { name: 'id', label: 'ID' },
    { name: 'picture', label: 'Picture', type: 'image' },
    { name: 'balance', label: 'Balance', type: 'currency' },
    { name: 'age', label: 'Age' },
    { name: 'company', label: 'Company' },
    { name: 'email', label: 'Email' },
    { name: 'address', label: 'Address', type: 'address' },
    { name: 'tags', label: 'Tags', type: 'tags' },
    { name: 'favoriteFruit', label: 'Favorite Fruit' },
  ].map(el => (isKeySortable(el.name) ? { ...el, isSortable: true } : el)) as Array<ColumnConfig<Person>>
  public visibleColumns = this.columnsConfig.map(({ name }) => name)
  public paginationOptions = [5, 10, 25]
  public tableDataSource = new MatTableDataSource<Person>()

  @ViewChild(MatPaginator) public paginator: MatPaginator | null = null
  @ViewChild(MatSort) public sort!: MatSort

  constructor(
    private personsTableService: PersonsTableService,
    private fb: FormBuilder,
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

  public trackColumnsByName(_: number, { name }: ColumnConfig<Person>): string {
    return name
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
