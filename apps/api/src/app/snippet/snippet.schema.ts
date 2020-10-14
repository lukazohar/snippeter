import { Document } from 'mongoose';
import { ISnippet, ISnippetConfig } from '@snippeter/api-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SnippetDocument = Snippet & Document;

@Schema()
export class Snippet implements ISnippet {
  @Prop()
  createdAt: Date;

  @Prop()
  modifiedAt: Date;

  @Prop()
  public: boolean;

  @Prop()
  config: ISnippetConfig;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);
