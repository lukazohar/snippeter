import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'snippeter-prefix',
  templateUrl: './prefix.component.html',
  styleUrls: ['./prefix.component.scss']
})
export class PrefixComponent implements OnInit {
  @Input() prefix: FormControl;

  constructor() {}

  ngOnInit() {}
}
