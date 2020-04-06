export interface ISnippetConfig {
  name?: string;
  prefix: string;
  description?: string;
  body: string;
}

export interface ISnippet {
  id?: string;
  config: ISnippetConfig;
  createdAt: Date;
  modifiedAt: Date;
  public?: boolean;
}

export class CreateSnippetDto {
  name: string;
  prefix: string;
  description: string;
  body: string;
}
export class UpdateSnippetDto {
  name: string;
  prefix: string;
  description: string;
  body: string;
}
