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
import { MatTableDataSource } from '@angular/material/table'
import { debounceTime, distinctUntilChanged, map, Subscription } from 'rxjs'

import { PersonsTableService } from '../../services/persons-table.service'
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
    { name: 'isActive', label: 'Activity', type: 'activity' },
    { name: 'name', label: 'Name', isSticky: true },
    { name: 'id', label: 'ID' },
    { name: 'picture', label: 'Picture', type: 'image' },
    { name: 'age', label: 'Age' },
    { name: 'company', label: 'Company' },
    { name: 'email', label: 'Email' },
    { name: 'address', label: 'Address' },
    { name: 'tags', label: 'Tags', type: 'tags' },
    { name: 'favoriteFruit', label: 'Favorite Fruit' },
  ]
  public visibleColumns = this.columnsConfig.map(({ name }) => name)
  public paginationOptions = [5, 10, 25]
  public tableDataSource = new MatTableDataSource<Person>()

  @ViewChild(MatPaginator) public paginator: MatPaginator | null = null

  constructor(
    private personsTableService: PersonsTableService,
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
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
  }

  public trackColumnsByName(_: number, { name }: ColumnConfig<Person>): string {
    return name
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
