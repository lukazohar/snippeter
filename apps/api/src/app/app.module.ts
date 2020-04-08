import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // mongodb+srv://<user>:<password>
      'mongodb+srv://admin:admin@cluster0-tyt0o.mongodb.net/snippets?retryWrites=true&w=majority',
      { connectionName: 'snippets' }
    ),
    MongooseModule.forRoot(
      // mongodb+srv://<user>:<password>
      'mongodb+srv://admin:admin@cluster0-tyt0o.mongodb.net/users?retryWrites=true&w=majority',
      { connectionName: 'users' }
    ),
    SnippetModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
