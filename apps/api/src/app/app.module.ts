import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SnippetModule } from './snippet/snippet.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { MongoModule } from './mongo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'snippeter')
    }),
    ConfigModule.forRoot({
      envFilePath: [
        './environments/.env.development',
        './environments/.env.production'
      ],
      isGlobal: true
    }),
    MongoModule,
    SnippetModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
