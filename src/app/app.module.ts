import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';
import { HttpResponseInterceptor } from './interceptors/http-response-interceptor';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RoleGuard } from './guards/role.guard';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { LogoutComponent } from './views/authentication/logout/logout.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthenticationGuard,
    RoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
