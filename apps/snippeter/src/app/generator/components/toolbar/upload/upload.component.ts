import { Component, OnInit, Input } from '@angular/core';
import { UploadSnippetService } from '../../../services/upload-snippet/upload-snippet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { ISnippet, ISnippetConfig } from '@snippeter/api-interfaces';

@Component({
  selector: 'snippeter-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Input() name: string;
  @Input() prefix: string;
  @Input() description: string;
  @Input() body: string;

  constructor(
    private uploadSnippetService: UploadSnippetService,
    private snackBar: MatSnackBar,
    private clipboardService: ClipboardService
  ) {}

  ngOnInit() {}

  upload() {
    const snippet: ISnippetConfig = {
      name: this.name,
      prefix: this.prefix,
      description: this.description,
      body: this.body
    };
    this.uploadSnippetService.uploadSnippet(snippet).subscribe(res => {
      this.snackBarSuccess(`uploaded snippet and copied link`);
      this.clipboardService.copyFromContent(
        `${window.location.origin}/${res._id}`
      );
    });
  }

  snackBarSuccess(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 10000
    });
  }
}
