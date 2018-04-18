import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {

  constructor(private authService: AuthService, private injector: Injector) {
    setTimeout(() => {
      this.authService = this.injector.get(AuthService);
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService == null) {
      this.authService = this.injector.get(AuthService);
    }
    let interceptedRequest: HttpRequest<any> = request.clone({
      headers: request.headers.set('source', 'web')
        .set('version', '1.0.0')
    });

    if (!this.authService.isAuthenticated()) {
      interceptedRequest = interceptedRequest.clone({
        headers: request.headers.set('Authorization', this.authService.getAuthToken())
      });
    }
    return next.handle(interceptedRequest);
  }

}
