import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuard implements CanLoad {
  private isAppInitialized: boolean;

  constructor(private userService: UserService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const currentUser = this.userService.getUser();

    if (currentUser && !this.isAppInitialized) {
      this.userService.resolveUserRoleDefaultPage(currentUser);
      this.isAppInitialized = true;
      return false;
    }

    return true;
  }
}

