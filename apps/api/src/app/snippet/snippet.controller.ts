import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
  HttpCode
} from '@nestjs/common';
import { SnippetService } from './snippet.service';
import {
  ISnippet,
  CreateSnippetDto,
  UpdateSnippetDto
} from './snippet.interface';

@Controller('snippets')
export class SnippetController {
  constructor(private snippetsService: SnippetService) {}

  @Get()
  @HttpCode(404)
  getSnippets(): Promise<ISnippet[]> {
    return this.snippetsService.findAll();
  }

  @Get(':id')
  getSnippetById(@Param('id') id: string): Promise<ISnippet> {
    return this.snippetsService.findOne(id);
  }

  @Post()
  createSnippet(@Body() newSnippet: CreateSnippetDto): Promise<ISnippet> {
    return this.snippetsService.create(newSnippet);
  }

  @Patch(':id')
  @HttpCode(404)
  updateSnippet(
    @Param('id') id: string,
    @Body() updatedSnippet: UpdateSnippetDto
  ): Promise<ISnippet> {
    return this.snippetsService.update(id, updatedSnippet);
  }

  @Delete(':id')
  @HttpCode(404)
  deleteSnippet(@Param('id') id: string) {
    this.snippetsService.delete(id);
  }
}
