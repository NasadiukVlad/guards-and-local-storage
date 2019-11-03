import {UserRole} from '../enums/user-role.enum';

export class User {
  constructor(
    public username: string,
    public password: string,
    public role: UserRole) {
  }
}


