import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'snippeter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl(null);
  password: FormControl = new FormControl(null);

  constructor(
    public dialogRefLogin: MatDialogRef<LoginComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  login(): void {}

  register(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dialogRefLogin.close();
    });
  }
}
