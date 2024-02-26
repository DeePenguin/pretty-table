import type { PersonApi } from '../models/person-api.model'
import type { Person } from '../models/person.model'

export const convertPersonApiToPerson = (person: PersonApi): Person => {
  return {
    ...person,
    id: person._id,
    name: person.name ? `${person.name.first} ${person.name.last}` : 'Unknown',
  }
}
