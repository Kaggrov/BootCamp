import { CanActivateFn } from '@angular/router';
import { LogoService } from '../services/logo.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  console.log('CanActivate called');
  
  return inject(LogoService).isAuthenticated();
};
