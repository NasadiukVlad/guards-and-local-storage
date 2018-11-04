import {UserRole} from '../enums/user-role.enum';

interface IUser {
  username: string;
  password: string;
  role: UserRole;
}

export class User implements IUser {
  public username: string;
  public password: string;
  public role: UserRole;


  constructor
  (username: string,
   password: string,
   role: UserRole) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}


