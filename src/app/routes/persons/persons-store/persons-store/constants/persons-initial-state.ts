import type { PersonsState } from '../models/persons-state.model'

export const personsInitialState: PersonsState = {
  isLoading: false,
  persons: [],
  error: null,
}
