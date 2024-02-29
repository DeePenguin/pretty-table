import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { LetModule } from '@ngrx/component'

import { PersonsTableComponent } from './components/persons-table/persons-table.component'
import { TableColumnsVisibilityModalComponent } from './components/table-columns-visibility-modal/table-columns-visibility-modal.component'
import { PersonsPageComponent } from './pages/persons-page/persons-page.component'
import { PersonsRoutingModule } from './persons-routing.module'
import { PersonsStoreModule } from './persons-store/persons-store/persons-store.module'
import { VisibleColumnsPipe } from './pipes/visible-columns.pipe'
import { PersonsTableService } from './services/persons-table.service'
import { ButtonComponent } from 'src/app/common/components/button/button.component'

@NgModule({
  declarations: [PersonsPageComponent, PersonsTableComponent, TableColumnsVisibilityModalComponent, VisibleColumnsPipe],
  imports: [
    CommonModule,
    PersonsStoreModule,
    PersonsRoutingModule,
    NgOptimizedImage,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    LetModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
  ],
  providers: [PersonsTableService],
})
export class PersonsModule {}
