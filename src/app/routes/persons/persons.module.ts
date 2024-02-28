import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { LetModule } from '@ngrx/component'

import { PersonsTableComponent } from './components/persons-table/persons-table.component'
import { PersonsPageComponent } from './pages/persons-page/persons-page.component'
import { PersonsRoutingModule } from './persons-routing.module'
import { PersonsStoreModule } from './persons-store/persons-store/persons-store.module'
import { PersonsTableService } from './services/persons-table.service'

@NgModule({
  declarations: [PersonsPageComponent, PersonsTableComponent],
  imports: [
    CommonModule,
    PersonsStoreModule,
    PersonsRoutingModule,
    NgOptimizedImage,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LetModule,
  ],
  providers: [PersonsTableService],
})
export class PersonsModule {}
