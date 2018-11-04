import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.userService.getUser();
    if (currentUser) {
      this.userService.resolveUserRoleDefaultPage(currentUser);
      return true;
    }

    this.authService.logout();
    return false;
  }
}
