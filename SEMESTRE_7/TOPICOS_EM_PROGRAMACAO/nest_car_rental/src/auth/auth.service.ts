import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../domains/users/users.service';
import { CreateUserDto } from 'src/domains/users/dto/create-user-dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.senha === password) {
      return true;
    }
    return false;
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    const { senha, ...result } = user;

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    return await this.usersService.create(createUserDto); // Chama o método do serviço para criar o usuário
  }
}
