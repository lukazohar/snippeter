import { TestBed } from '@angular/core/testing';

import { UploadSnippetService } from './upload-snippet.service';

describe('UploadSnippetService', () => {
  let service: UploadSnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadSnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
