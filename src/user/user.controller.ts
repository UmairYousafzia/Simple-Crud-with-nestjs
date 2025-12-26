import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService){}

    @Post()
    create() {
        return this.userservice.createuser();
    }    
    @Get()
    get() {
        return this.userservice.findall();
    }
}
