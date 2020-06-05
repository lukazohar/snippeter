import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SnippetModule } from './snippet/snippet.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'snippeter')
    }),
    MongooseModule.forRoot(
      // mongodb+srv://<user>:<password>
      'mongodb+srv://admin:admin@cluster0-tyt0o.mongodb.net/snippets?retryWrites=true&w=majority',
      {
        connectionName: 'snippets',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    MongooseModule.forRoot(
      // mongodb+srv://<user>:<password>
      'mongodb+srv://admin:admin@cluster0-tyt0o.mongodb.net/users?retryWrites=true&w=majority',
      {
        connectionName: 'users',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    SnippetModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
