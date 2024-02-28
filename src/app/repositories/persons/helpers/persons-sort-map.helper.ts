import type { PersonSortable } from '../models/person-sortable-keys.model'
import { localeStringComparator } from 'src/app/common/helpers/locale-string-comparator.helper'
import type { SortMap } from 'src/app/common/models/sort-map.model'

export const personsSortMap: SortMap<PersonSortable> = {
  id: (a, b) => localeStringComparator(a.id, b.id),
  name: (a, b) => localeStringComparator(a.name, b.name),
  balance: (a, b) => a.balance - b.balance,
  age: (a, b) => a.age - b.age,
  isActive: (a, b) => Number(a.isActive) - Number(b.isActive),
  company: (a, b) => localeStringComparator(a.company, b.company),
  email: (a, b) => localeStringComparator(a.email, b.email),
  address: (a, b) => localeStringComparator(a.address, b.address),
  favoriteFruit: (a, b) => localeStringComparator(a.favoriteFruit, b.favoriteFruit),
  tags: (a, b) => a.tags.length - b.tags.length,
}
