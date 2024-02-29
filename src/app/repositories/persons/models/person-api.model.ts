import type { PersonApiName } from './person-api-name.model'

/* eslint-disable @typescript-eslint/naming-convention */
export interface PersonApi {
  _id: string
  isActive: boolean
  balance?: string
  picture: string
  age: number
  name?: PersonApiName
  company?: string
  email?: string
  address: string
  tags: string[]
  favoriteFruit: string
}
