import type { PersonApi } from '../models/person-api.model'
import type { Person } from '../models/person.model'

export const convertPersonApiToPerson = ({ _id, name, balance, company, email, ...person }: PersonApi): Person => {
  return {
    ...person,
    id: _id,
    name: name ? `${name.first} ${name.last}` : 'Unknown',
    company: company ?? 'Unknown',
    balance: balance ? parseFloat(balance.replace(/[$,]/g, '')) : 0,
    email: email ?? 'Unknown',
  }
}
