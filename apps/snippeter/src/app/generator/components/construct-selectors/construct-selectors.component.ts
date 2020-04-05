import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  Output
} from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'snippeter-construct-selectors',
  templateUrl: './construct-selectors.component.html',
  styleUrls: ['./construct-selectors.component.scss']
})
export class ConstructSelectorsComponent implements OnInit {
  @ViewChild('group', { static: false }) toggleGroup: MatButtonToggleGroup;

  @Output() selectedConstruct = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeSelectedConstructValue(value: string) {
    this.selectedConstruct.emit(value);
  }
}
