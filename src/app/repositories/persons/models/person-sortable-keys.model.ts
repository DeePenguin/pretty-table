import type { Person } from './person.model'

export type PersonSortable = Pick<Person, PersonSortableKeys>

export type PersonSortableKeys = (typeof personSortableKeys)[number]

export const personSortableKeys = [
  'id',
  'isActive',
  'balance',
  'age',
  'name',
  'company',
  'email',
  'address',
  'tags',
  'favoriteFruit',
] as const
