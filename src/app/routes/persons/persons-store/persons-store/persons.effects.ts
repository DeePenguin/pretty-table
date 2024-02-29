import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, of, switchMap } from 'rxjs'

import { personsApiActions } from './actions/persons-api.actions'
import { personsTableActions } from './actions/persons-table.actions'
import { PersonsRepositoryService } from 'src/app/repositories/persons/services/persons-repository.service'

@Injectable()
export class PersonsEffects {
  constructor(
    private actions$: Actions,
    private personsRepositoryService: PersonsRepositoryService,
    private store: Store,
  ) {}

  public loadPersons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(personsTableActions.getPersons),
      switchMap(() =>
        this.personsRepositoryService.getPersons().pipe(
          map(persons => personsApiActions.loadPersonsSuccess({ persons })),
          catchError(({ message }: { message?: string }) =>
            of(personsApiActions.loadPersonsFailure({ error: message ?? 'Unknown error' })),
          ),
        ),
      ),
    )
  })
}
