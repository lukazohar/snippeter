import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'snippeter-copy-snippet',
  templateUrl: './copy-snippet.component.html',
  styleUrls: ['./copy-snippet.component.scss']
})
export class CopySnippetComponent implements OnInit {
  @Input() name: string;
  @Input() prefix: string;
  @Input() description: string;
  @Input() body: string;

  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  convertOriginalToSnippet(
    name: string,
    prefix: string,
    description: string,
    body: string
  ) {
    const snippetBodyArr: Array<string> = this.body.split('\n');
    let snippetBodyString = '';
    // Pushed new array cell for every new line in description string
    snippetBodyArr.forEach(row => {
      row = row.replace(/"/g, '\\"');
      snippetBodyString += `\t\t\t"${row}",\n`;
    });

    return (
      `"${name}": {\n` +
      `\t\t"prefix": "${prefix}",\n` +
      `\t\t"description": "${description}",\n` +
      `\t\t"body": [\n${snippetBodyString}\t\t],\n` +
      `\t}`
    );
  }

  copy() {
    const snippet = this.convertOriginalToSnippet(
      this.name,
      this.prefix,
      this.description,
      this.body
    );
    this.clipboardService.copyFromContent(snippet);
    this.snackBarSuccess();
  }

  snackBarSuccess() {
    this.snackBar.open(
      'paste to: file > preferences > user snippets',
      'dismiss',
      {
        duration: 7000
      }
    );
  }
}
