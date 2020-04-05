export interface ISnippetConfig {
    name?: string,
    prefix: string,
    description?: string,
    body: string
}

export interface ISnippets {
    id: string;
    config: ISnippetConfig
    createdAt: Date
    modifiedAt: Date
    public: boolean;
}

