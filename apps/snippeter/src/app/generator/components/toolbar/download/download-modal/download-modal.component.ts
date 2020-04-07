import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DownloadSnippetService } from '../../../../services/download-snippet/download-snippet.service';
import { ISnippet } from '@snippeter/api-interfaces';

interface ISnippetControls {
  name: FormControl;
  prefix: FormControl;
  description: FormControl;
  body: FormControl;
}

@Component({
  selector: 'snippeter-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.scss']
})
export class DownloadModalComponent implements OnInit {
  URL: FormControl = new FormControl('');

  constructor(
    private downloadSnippetService: DownloadSnippetService,
    public dialogRefLogin: MatDialogRef<DownloadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISnippetControls
  ) {}

  ngOnInit() {}

  download() {
    this.downloadSnippetService
      .downloadSnippet(this.URL.value)
      .subscribe((snippet: ISnippet) => {
        this.data.name.setValue(snippet.config.name);
        this.data.prefix.setValue(snippet.config.prefix);
        this.data.description.setValue(snippet.config.description);
        this.data.body.setValue(snippet.config.body);
      });
  }
}
