import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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

  setCursorPosition(
    selectionIndex: number,
    constructType?: string,
    stopId?: number
  ) {
    switch (constructType) {
      case 'tabstop': {
        this.setSelectionStartAndEnd(
          selectionIndex + 1 + stopId.toString().length
        );
        break;
      }
      case 'placeholder': {
        this.setSelectionStartAndEnd(
          selectionIndex + 3 + stopId.toString().length
        );
        break;
      }
      case 'choice': {
        this.setSelectionStartAndEnd(
          selectionIndex + 3 + stopId.toString().length
        );
        break;
      }
      default: {
        this.setSelectionStartAndEnd(selectionIndex);
      }
    }
  }

  setSelectionStartAndEnd(index: number) {
    // @ts-ignore
    this.autosize._elementRef.nativeElement.selectionStart = index;
    // @ts-ignore
    this.autosize._elementRef.nativeElement.selectionEnd = index;
  }
}
