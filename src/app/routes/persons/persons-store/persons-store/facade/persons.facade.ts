import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { personsTableActions } from '../actions/persons-table.actions'
import { selectError, selectIsLoading, selectPersons } from '../persons.selectors'

@Injectable()
export class PersonsFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public error$ = this.store.select(selectError)
  public persons$ = this.store.select(selectPersons)

  constructor(private store: Store) {}

  public getPersons(): void {
    this.store.dispatch(personsTableActions.getPersons())
  }
}
