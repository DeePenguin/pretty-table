import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { PersonsFacade } from './facade/persons.facade'
import { PersonsEffects } from './persons.effects'
import { personsReducer } from './persons.reducer'
import { StoreFeatureName } from 'src/app/common/models/store-feature-name.enum'
import { PersonsHttpService } from 'src/app/repositories/persons/services/persons-http.service'
import { PersonsRepositoryService } from 'src/app/repositories/persons/services/persons-repository.service'

@NgModule({
  imports: [StoreModule.forFeature(StoreFeatureName.PERSONS, personsReducer), EffectsModule.forFeature(PersonsEffects)],
  providers: [PersonsFacade, PersonsHttpService, PersonsRepositoryService],
})
export class PersonsStoreModule {}
