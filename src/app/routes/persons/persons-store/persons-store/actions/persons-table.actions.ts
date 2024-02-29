import { createActionGroup, emptyProps } from '@ngrx/store'

export const personsTableActions = createActionGroup({
  source: 'Persons Table',
  events: {
    'Get Persons': emptyProps(),
  },
})
