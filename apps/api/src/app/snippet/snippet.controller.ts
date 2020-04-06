import {
  Controller,
  Get,
  ParseIntPipe,
  Param,
  Post,
  Patch,
  Delete
} from '@nestjs/common';
import { SnippetService } from './snippet.service';

@Controller('snippet')
export class SnippetController {
  constructor(private snippetsService: SnippetService) {}

  @Get(':id')
  getSnippetById(@Param('id', ParseIntPipe) id: number) {}

  @Post()
  createSnippet() {}

  @Patch(':id')
  updateSnippet() {}

  @Delete(':id')
  deleteSnippet() {}
}
