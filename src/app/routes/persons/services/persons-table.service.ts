import { Injectable } from '@angular/core'
import { BehaviorSubject, combineLatest, map } from 'rxjs'

import { searchPersons } from '../helpers/search-persons.helper'
import { PersonsFacade } from '../persons-store/persons-store/facade/persons.facade'

@Injectable()
export class PersonsTableService {
  private storedPersons$ = this.personsFacade.persons$
  private searchQuery$$ = new BehaviorSubject<string | null>(null)
  public persons$ = combineLatest([this.storedPersons$, this.searchQuery$$]).pipe(
    map(([persons, searchQuery]) => searchPersons(persons, searchQuery)),
  )
  constructor(private personsFacade: PersonsFacade) {}

  public search(query: string | null): void {
    this.searchQuery$$.next(query)
  }
}
