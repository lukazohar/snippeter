import { ISnippetConfig } from './snippet-config';

export interface ISnippet {
  id?: string;
  config: ISnippetConfig;
  createdAt: Date;
  modifiedAt: Date;
  public?: boolean;
}
