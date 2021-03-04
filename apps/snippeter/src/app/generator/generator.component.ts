import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConstructsComponent } from './components/constructs/constructs.component';
import { ITabstop, IPlaceholder, IChoice } from '@snippeter/api-interfaces';
import { BodyComponent } from './components/body/body.component';

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

  selectedConstruct = '';

  tabstops: Array<ITabstop> = [];
  placeholders: Array<IPlaceholder> = [];
  choices: Array<IChoice> = [];

  @ViewChild(ConstructsComponent, { static: false })
  constructsComponent: ConstructsComponent;
  @ViewChild(BodyComponent, { static: false })
  bodyComponent: BodyComponent;

  constructor() {}

  ngOnInit(): void {}

  addTab(event) {
    const index = event.target.selectionStart;

    event.preventDefault();

    const newBody =
      this.body.value.substring(0, event.target.selectionStart) +
      '    ' +
      this.body.value.substring(event.target.selectionStart);
    this.body.setValue(newBody);

    this.bodyComponent.setCursorPosition(index + 4);

    this.constructsComponent.scanForChanges(this.body.value);
  }
}
