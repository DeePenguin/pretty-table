import { type PersonSortableKeys, personSortableKeys } from '../models/person-sortable-keys.model'

export const isKeySortable = (key: string): key is PersonSortableKeys =>
  personSortableKeys.includes(key as PersonSortableKeys)
