import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DownloadSnippetService } from '../../../../services/download-snippet/download-snippet.service';
import { ISnippet } from '@snippeter/api-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  URL: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private downloadSnippetService: DownloadSnippetService,
    public dialogRefLogin: MatDialogRef<DownloadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISnippetControls,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DownloadModalComponent>
  ) {}

  ngOnInit() {}

  download() {
    const extractedURL = this.extractURL(this.URL.value);

    this.downloadSnippetService.downloadSnippet(extractedURL).subscribe(
      (snippet: ISnippet) => {
        this.data.name.setValue(snippet.config.name);
        this.data.prefix.setValue(snippet.config.prefix);
        this.data.description.setValue(snippet.config.description);
        this.data.body.setValue(snippet.config.body);

        this.snackBar.open('snippet downloaded', 'dismiss', {
          duration: 6000
        });

        this.dialogRef.close();
      },
      err => {
        this.snackBar.open("snippet doesn't exist or is private", 'dismiss', {
          duration: 6000
        });
      }
    );
  }

  extractURL(fullString: string): string {
    return fullString.split('/').pop() || fullString;
  }
}
