import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISnippet, ISnippetConfig } from '@snippeter/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DownloadSnippetService {
  constructor(private http: HttpClient) {}

  downloadSnippet(id: string): Observable<ISnippet> {
    return this.http.get<ISnippet>(`/api/snippets/${id}`);
  }
}
