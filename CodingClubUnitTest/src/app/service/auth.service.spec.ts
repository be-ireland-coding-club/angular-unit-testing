import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  it('Should call isAuthenticated and return true', () => {
    let isAuthenticated: boolean = false;
    isAuthenticated = service.isAuthenticated('guest', 'guest')
    expect(isAuthenticated).toBeTruthy();
    
  });

  it('Should call isAuthenticated and return false', () => {
    let isAuthenticated: boolean = false;
    isAuthenticated = service.isAuthenticated('guest', 'guest1')
    expect(isAuthenticated).toBeFalsy();
   
  });

  
});
