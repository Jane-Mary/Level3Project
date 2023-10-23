import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, window } from 'rxjs';

export const logoutGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const auth = localStorage.getItem('auth')
  if (auth !== null) {
   
    return inject(Router).navigate(['/home'])
    
    
  }
  return true
}