import { Controller, Get, ParseIntPipe, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
    }

    @Post()
    createUser() {
    }

    @Patch(':id')
    updateUser() {

    }

    @Delete(':id')
    deleteUser() {

    }


}
