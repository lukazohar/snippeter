import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'snippeter-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: FormControl = new FormControl(null, [
    Validators.email,
    Validators.required
  ]);
  nickname: FormControl = new FormControl(null, [Validators.required]);
  firstName: FormControl = new FormControl(null);
  lastName: FormControl = new FormControl(null);
  password: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  register(): void {}
}
