import {Injectable} from '@angular/core';
import {User} from '../../auth/models/user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginAction = new Subject<boolean>();

  constructor(private userService: UserService,
              private router: Router) {}

  public login(username: string, password: string) {

    const currentUser: User = this.userService.getAllUsers()
      .find(((user: User) => user.username === username && user.password === password));

    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.loginAction.next(true);
      this.userService.resolveUserRoleDefaultPage(currentUser);
    } else {
      alert('Wrong credentials');
    }
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
    this.loginAction.next(false);
  }
}


