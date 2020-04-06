import * as mongoose from 'mongoose';

export const SnippetSchema = new mongoose.Schema({
  name: String,
  prefix: String,
  description: String,
  body: String
});
