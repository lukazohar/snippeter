import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConstructsComponent } from './components/constructs/constructs.component';
import { ITabstop, IPlaceholder, IChoice } from '@snippeter/api-interfaces';

@Component({
  selector: 'snippeter-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  name = new FormControl('');
  prefix = new FormControl('');
  description = new FormControl('');
  body = new FormControl('');

  selectedConstruct: string;

  tabstops: Array<ITabstop> = [];
  placeholders: Array<IPlaceholder> = [];
  choices: Array<IChoice> = [];

  @ViewChild(ConstructsComponent, { static: false })
  constructsComponent: ConstructsComponent;

  constructor() {}

  ngOnInit(): void {}
}
