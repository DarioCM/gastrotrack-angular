// Instead of manually adding the token in every request, 
// we’ll create an HTTP Interceptor to automatically attach it to all outgoing requests.
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



export const AuthInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const clonedRequest = req.clone({

    setHeaders: {

      Authorization: `Bearer ${localStorage.getItem('token')}`

    }

  });

  return next(clonedRequest);

};