import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { convertPersonApiToPerson } from '../helpers/convert-person-api-to-person.helper'
import type { Person } from '../models/person.model'
import { PersonsHttpService } from './persons-http.service'
import { convertArray } from 'src/app/common/helpers/convert-array.helper'

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private httpService: PersonsHttpService) {}

  public getPersons(): Observable<Person[]> {
    return this.httpService.getPersons().pipe(map(persons => convertArray(persons, convertPersonApiToPerson) || []))
  }
}
