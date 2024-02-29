import { type HttpInterceptorFn } from '@angular/common/http'
import { delay } from 'rxjs'

const mockDataPath = 'assets/data/mock-persons-data.json'

export const mockPersonsDataInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url?.endsWith('/persons')) {
    return next(req)
  }

  const updatedReq = req.clone({
    url: mockDataPath,
  })

  return next(updatedReq).pipe(delay(1000))
}
