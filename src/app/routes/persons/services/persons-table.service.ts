import { Injectable } from '@angular/core'
import { BehaviorSubject, combineLatest, map } from 'rxjs'

import { PersonsFacade } from '../persons-store/persons-store/facade/persons.facade'

@Injectable()
export class PersonsTableService {
  private storedPersons$ = this.personsFacade.persons$
  private filterQuery$$ = new BehaviorSubject('')
  public persons$ = combineLatest([this.storedPersons$, this.filterQuery$$]).pipe(
    map(([persons, query]) => persons.filter(({ name }) => name.includes(query))),
  )
  constructor(private personsFacade: PersonsFacade) {}

  public filter(query: string): void {
    this.filterQuery$$.next(query)
  }
}
