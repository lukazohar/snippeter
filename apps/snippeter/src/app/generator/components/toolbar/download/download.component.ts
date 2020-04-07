import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { DownloadModalComponent } from './download-modal/download-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'snippeter-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @Input() name: FormControl;
  @Input() prefix: FormControl;
  @Input() description: FormControl;
  @Input() body: FormControl;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit() {}

  openLoginModal(): void {
    const dialogRef = this.dialog.open(DownloadModalComponent, {
      width: '400px',
      data: {
        name: this.name,
        prefix: this.prefix,
        description: this.description,
        body: this.body
      }
    });
  }

  snackBarSuccess(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 10000
    });
  }
}
