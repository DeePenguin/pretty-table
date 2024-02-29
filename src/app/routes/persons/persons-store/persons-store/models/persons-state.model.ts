import type { Person } from 'src/app/repositories/persons/models/person.model'

export interface PersonsState {
  isLoading: boolean
  persons: Person[]
  error: string | null
}
