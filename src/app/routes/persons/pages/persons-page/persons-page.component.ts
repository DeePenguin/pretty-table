import { ChangeDetectionStrategy, Component } from '@angular/core'

import { PersonsService } from 'src/app/repositories/persons/services/persons.service'

@Component({
  selector: 'pt-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsPageComponent {
  public persons$ = this.personsService.getPersons()
  constructor(private personsService: PersonsService) {}
}
