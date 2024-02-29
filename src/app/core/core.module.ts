import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { isDevMode, NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { httpInterceptors } from './interceptors/interceptors'

@NgModule({
  imports: [
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [provideHttpClient(withInterceptors(httpInterceptors))],
})
export class CoreModule {}
