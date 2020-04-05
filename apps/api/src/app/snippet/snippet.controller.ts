import { Controller, Get, ParseIntPipe, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('snippet')
export class SnippetController {

    @Get(':id')
    getSnippetById(@Param('id', ParseIntPipe) id: number) {
    }

    @Post()
    createSnippet() {
    }

    @Patch(':id')
    updateSnippet() {

    }

    @Delete(':id')
    deleteSnippet() {

    }


}
