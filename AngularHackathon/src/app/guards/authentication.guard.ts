import { CanActivateFn } from '@angular/router';
import { AngularApiService } from '../services/angular-api.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  return inject(AngularApiService).isLoggedFunIn;

};
