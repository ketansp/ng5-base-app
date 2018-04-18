import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public currentUser: object = {};

  constructor() { }

  login() {

  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.currentUser = {};
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentRole() {
    // return this.currentUser['role'];
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  isAuthenticated() {
    if (localStorage.getItem('authToken') !== undefined
      && localStorage.getItem('authToken') != null
      && localStorage.getItem('authToken').trim() !== '') {
      return true;
    }
    return false;
  }

}
