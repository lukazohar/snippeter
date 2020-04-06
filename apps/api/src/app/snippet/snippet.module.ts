import { SnippetService } from './snippet.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SnippetSchema } from './snippet.schema';
import { SnippetController } from './snippet.controller';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Snippet', schema: SnippetSchema }],
      'snippets'
    )
  ],
  controllers: [SnippetController],
  providers: [SnippetService]
})
export class SnippetModule {}
