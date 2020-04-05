import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'snippeter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl(null);
  password: FormControl = new FormControl(null);

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {}

  login(): void {}

  register(): void {}
}
