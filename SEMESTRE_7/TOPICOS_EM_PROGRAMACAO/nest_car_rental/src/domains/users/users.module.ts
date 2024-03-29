import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema'; // Importe o schema do usuário

@Module({ 
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Configure o MongooseModule com o schema do usuário
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, MongooseModule],
})
export class UsersModule {}
