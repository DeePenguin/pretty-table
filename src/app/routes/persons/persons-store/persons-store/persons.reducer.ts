import { createReducer, on } from '@ngrx/store'

import { personsApiActions } from './actions/persons-api.actions'
import { personsTableActions } from './actions/persons-table.actions'
import { personsInitialState } from './constants/persons-initial-state'
import type { PersonsState } from './models/persons-state.model'

export const personsReducer = createReducer(
  personsInitialState,
  on(personsTableActions.getPersons, (state): PersonsState => ({ ...state, isLoading: true })),
  on(
    personsApiActions.loadPersonsSuccess,
    (state, { persons }): PersonsState => ({ ...state, persons, error: null, isLoading: false }),
  ),
  on(personsApiActions.loadPersonsFailure, (state, { error }): PersonsState => ({ ...state, error, isLoading: false })),
)
