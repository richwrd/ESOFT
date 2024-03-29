import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/domains/users/dto/create-user-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post('register') // Endpoint para registrar um novo usuário
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto); // Chama o método do serviço para registrar o usuário
  }
  
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
