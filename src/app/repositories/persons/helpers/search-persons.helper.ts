import type { Person } from 'src/app/repositories/persons/models/person.model'

export const searchPersons = (persons: Person[], query: string | null): Person[] =>
  query
    ? persons.filter(person => JSON.stringify(Object.values(person)).toLowerCase().includes(query.toLowerCase()))
    : persons
