import { Controller, Post, Get, Put, Delete, Query, Req, Res, Param, Body, HttpCode, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {

    @Post()
    @HttpCode(201)
    async create(@Body() createCatDto: CreateUserDto) {
        return 'This action adds a new user';
    }


    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} users`;
    }


}

// constructor(private readonly usersService: UsersService) { }

// @Post()
// export create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto);
// }

// @Get(':username')
// findOne(@Param('username') username: string) {
//     try {
//         return this.usersService.findOne(username);
//     } catch (error) {
//         throw new HttpException(
//             status: HttpStatus.FORBIDDEN,
//             error: 'This is a custom message',
//         )
//         ';
//     }
// }