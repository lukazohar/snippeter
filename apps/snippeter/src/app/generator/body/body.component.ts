import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'snippeter-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() body: FormControl;

  @ViewChild('bodyTextField', { static: false }) autosize: CdkTextareaAutosize;

  constructor() {}

  ngOnInit() {}
}
