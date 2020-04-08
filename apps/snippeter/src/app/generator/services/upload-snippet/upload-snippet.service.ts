import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISnippetConfig } from '@snippeter/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UploadSnippetService {
  constructor(private http: HttpClient) {}

  uploadSnippet(newSnippet: ISnippetConfig): Observable<{ _id: string }> {
    return this.http.post<{ _id: string }>('/api/snippets', newSnippet);
  }
}
