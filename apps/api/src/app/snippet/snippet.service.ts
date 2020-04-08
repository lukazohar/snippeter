import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ISnippet,
  CreateSnippetDto,
  UpdateSnippetDto
} from './snippet.interface';

@Injectable()
export class SnippetService {
  // @ts-ignore
  constructor(@InjectModel('Snippet') private snippetModel: Model<ISnippet>) {}

  async findAll(): Promise<ISnippet[]> {
    return this.snippetModel.find().exec();
  }

  async findOne(id: string): Promise<ISnippet> {
    return this.snippetModel.findById(id).exec();
  }

  async create(snippet: CreateSnippetDto): Promise<ISnippet> {
    const newSnippet: ISnippet = {
      config: snippet,
      createdAt: new Date(),
      modifiedAt: new Date()
    };
    // @ts-ignore
    return new this.snippetModel(newSnippet).save();
  }

  async update(id: string, snippet: UpdateSnippetDto): Promise<ISnippet> {
    const updatedSnippet = await this.snippetModel.findById(id);
    if (snippet.name) updatedSnippet.config.name = snippet.name;
    if (snippet.prefix) updatedSnippet.config.prefix = snippet.prefix;
    if (snippet.description)
      updatedSnippet.config.description = snippet.description;
    if (snippet.body) updatedSnippet.config.body = snippet.body;
    // @ts-ignore
    return updatedSnippet.save();
  }

  async delete(id: string) {
    this.snippetModel.deleteOne({ _id: id }).exec();
  }
}
