import type { PersonSortable } from '../models/person-sortable-keys.model'
import { personsSortMap } from './persons-sort-map.helper'
import type { SortCriteria } from 'src/app/common/models/sort-criteria.model'
import type { Person } from 'src/app/repositories/persons/models/person.model'

export const sortPersons = (persons: Person[], { key, direction }: SortCriteria<PersonSortable>): Person[] =>
  [...persons].sort((a, b) => personsSortMap[key](a, b) * direction)
