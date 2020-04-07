import { TestBed } from '@angular/core/testing';

import { DownloadSnippetService } from './download-snippet.service';

describe('DownloadSnippetService', () => {
  let service: DownloadSnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadSnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
