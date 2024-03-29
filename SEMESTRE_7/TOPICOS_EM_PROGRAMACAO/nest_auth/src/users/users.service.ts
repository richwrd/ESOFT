import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

// // This should be a real class/interface representing a user entity
// export type Users = any;

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(usuario: string): Promise<User | undefined> {
    return this.users.find((user) => user.usuario === usuario);
  }
}
