import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { PersonsState } from './models/persons-state.model'
import { StoreFeatureName } from 'src/app/common/models/store-feature-name.enum'

const selectPersonsFeature = createFeatureSelector<PersonsState>(StoreFeatureName.PERSONS)

export const selectIsLoading = createSelector(selectPersonsFeature, ({ isLoading }: PersonsState) => isLoading)

export const selectError = createSelector(selectPersonsFeature, ({ error }: PersonsState) => error)

export const selectPersons = createSelector(selectPersonsFeature, ({ persons }: PersonsState) => persons)
