import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(userName: string, password: string): boolean {
    if (userName == 'guest' && password == 'guest') {
      return true;
    }
    else {
      return false;
    }
  }  

  isAuthenticated1(userName: string, password: string): Promise<boolean> {
    if (userName == 'guest' && password == 'guest') {
      
      return Promise.resolve(true);
    }
    else {
      return Promise.resolve(false);
    }
  }  
  
  
}
