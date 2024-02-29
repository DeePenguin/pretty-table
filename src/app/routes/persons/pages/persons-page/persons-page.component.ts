import { ChangeDetectionStrategy, Component } from '@angular/core'

import { PersonsFacade } from '../../persons-store/persons-store/facade/persons.facade'

@Component({
  selector: 'pt-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsPageComponent {
  public isLoading$ = this.personsFacade.isLoading$
  public error$ = this.personsFacade.error$

  public constructor(private personsFacade: PersonsFacade) {
    this.personsFacade.getPersons()
  }
}
