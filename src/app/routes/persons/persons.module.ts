import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PersonsPageComponent } from './pages/persons-page/persons-page.component'
import { PersonsRoutingModule } from './persons-routing.module'

@NgModule({
  declarations: [PersonsPageComponent],
  imports: [CommonModule, PersonsRoutingModule],
})
export class PersonsModule {}
