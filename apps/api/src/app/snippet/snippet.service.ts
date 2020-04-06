import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISnippets } from './snippet.interface';

@Injectable()
export class SnippetService {
  // @ts-ignore
  constructor(@InjectModel('Snippet') private snippetModel: Model<ISnippets>) {}
}
