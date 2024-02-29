import type { Routes } from '@angular/router'

import { PersonsPageComponent } from './pages/persons-page/persons-page.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PersonsPageComponent,
  },
]
