import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/authentication/login/login.component';
import { LogoutComponent } from './views/authentication/logout/logout.component';
import { HomeComponent } from './views/main/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  }
];
