import type { ColumnsConfig } from '../models/columns-config.model'
import type { Person } from 'src/app/repositories/persons/models/person.model'

export const columnsConfig: ColumnsConfig<Person> = {
  name: { label: 'Name', isVisible: true, isSortable: true, isSticky: true, isVisibilityToggleDisabled: true },
  isActive: { label: 'Activity', isVisible: true, isSortable: true, type: 'activity' },
  id: { label: 'ID', isVisible: true, isSortable: true },
  picture: { label: 'Picture', isVisible: true, isSortable: false, type: 'image' },
  balance: { label: 'Balance', isVisible: true, isSortable: true, type: 'currency' },
  age: { label: 'Age', isVisible: true, isSortable: true },
  company: { label: 'Company', isVisible: true, isSortable: true },
  email: { label: 'Email', isVisible: true, isSortable: true },
  address: { label: 'Address', isVisible: true, isSortable: true, type: 'address' },
  tags: { label: 'Tags', isVisible: true, isSortable: true, type: 'tags' },
  favoriteFruit: { label: 'Favorite Fruit', isVisible: true, isSortable: true },
}
