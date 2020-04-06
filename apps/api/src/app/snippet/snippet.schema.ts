import * as mongoose from 'mongoose';

export const SnippetSchema = new mongoose.Schema({
  id: String,
  config: {
    name: String,
    prefix: String,
    description: String,
    body: String
  },
  createdAt: Date,
  modifiedAt: Date,
  public: Boolean
});
