import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../../auth/models/user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginEventEmitter = new EventEmitter<boolean>();

  constructor(private userService: UserService,
              private router: Router) {}

  public login(username: string, password: string) {

    const currentUser: User = this.userService.getAllUsers()
      .find(((user: User) => user.username === username && user.password === password));

    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.loginEventEmitter.emit(true);
      this.userService.resolveUserRoleDefaultPage(currentUser);
    } else {
      alert('Wrong credentials');
    }
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
    this.loginEventEmitter.emit(false);
  }
}


