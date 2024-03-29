import { Controller, Post, Get, Param, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    @Get()
    async findAll(): Promise<string> {
        return 'This action returns all users';
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<string> {
        console.log(id);
        return `This action returns a user with ID: ${id}`;
    }
}
