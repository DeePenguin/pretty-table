import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'persons',
  },
  {
    path: 'persons',
    loadChildren: () => import('./routes/persons/persons.module').then(m => m.PersonsModule),
  },
]
