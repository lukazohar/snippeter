import { ISnippets } from '../snippet/snippet.interface';

export interface ICredentials {
    email: string
    nickname: string
    password: string
}

export interface IUser {
    id: string
    firstName: string
    lastName: string
    credentials: ICredentials
    snippets: Array<ISnippets>
}
