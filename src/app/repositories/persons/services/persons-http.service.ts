import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

import type { PersonApi } from '../models/person-api.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PersonsHttpService {
  private baseUrl = environment.API_URL
  constructor(private http: HttpClient) {}

  public getPersons(): Observable<PersonApi[]> {
    return this.http.get<PersonApi[]>(this.baseUrl)
  }
}
