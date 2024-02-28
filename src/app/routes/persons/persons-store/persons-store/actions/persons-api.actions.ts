import { createActionGroup, props } from '@ngrx/store'

import type { Person } from 'src/app/repositories/persons/models/person.model'

export const personsApiActions = createActionGroup({
  source: 'Persons API',
  events: {
    'Load Persons Success': props<{ persons: Person[] }>(),
    'Load Persons Failure': props<{ error: string }>(),
  },
})
