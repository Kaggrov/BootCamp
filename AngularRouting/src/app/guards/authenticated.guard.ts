import { CanActivateFn } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';
import { inject } from '@angular/core';


export const authenticatedGuard: CanActivateFn = (route, state) => {

  return inject(BlogServiceService).isLoggedFunIn;
};
