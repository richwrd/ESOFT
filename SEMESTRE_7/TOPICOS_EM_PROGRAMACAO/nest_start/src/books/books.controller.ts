import { Controller, Get } from '@nestjs/common';
import { Request } from 'express';
import { BooksService } from './books.service';


@Controller('books')
export class BooksController {
    
    constructor(private bookService: BooksService); // Injecting the service into our controller
    
    @Get()
    findAll(@Req() request: Request): string {
        return this.bookService.findAll();
    }
}   
