import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserRole} from '../../auth/enums/user-role.enum';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) {}

  public canActivate(next: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.getUserRoles() === UserRole.ADMIN) {
      return true;
    }
    this.router.navigateByUrl('/auth');
    return false;
  }
}

