import { Component, OnInit, Input } from '@angular/core';
import { ITabstop, IPlaceholder, IChoice } from '@snippeter/api-interfaces';
import { FormControl } from '@angular/forms';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'snippeter-constructs',
  templateUrl: './constructs.component.html',
  styleUrls: ['./constructs.component.scss']
})
export class ConstructsComponent implements OnInit {
  @Input() tabstops: Array<ITabstop>;
  @Input() placeholders: Array<IPlaceholder>;
  @Input() choices: Array<IChoice>;

  @Input() body: FormControl;

  placeholdersTags: Map<number, number> = new Map();
  placeholdersDeleting = false;

  constructor() {}

  ngOnInit() {
    this.scanBodyOnChanges();
  }

  scanBodyOnChanges() {
    this.body.valueChanges.subscribe((bodyText: string) => {
      this.scanForChanges(bodyText);
    });
  }

  scanForChanges(bodyText: string) {
    this.scanForTabstops(bodyText, this.tabstops);
    this.scanForPlaceholders(bodyText, this.placeholders);
    this.scanForChoices(bodyText, this.choices);
  }

  scanForTabstops(bodyText: string, tabstops: Array<ITabstop>) {
    this.tabstops.splice(0, tabstops.length);
    // Extracts all strings with that matches: $(any number without 0)
    const bodyTextTabstops: Array<string> =
      bodyText.match(/[$][1-9][0-9]*/g) || [];
    // ([$3, $1, $2] => [$1, $2, $3])
    bodyTextTabstops.forEach((id: string) => {
      tabstops.push({
        stopId: Number(id.replace('$', ''))
      });
    });
    tabstops.sort(
      (tab1: ITabstop, tab2: ITabstop) => tab1.stopId - tab2.stopId
    );
  }

  scanForPlaceholders(bodyText: string, placeholders: Array<IPlaceholder>) {
    // Extracts all strings with that matches: $(any number without 0)
    const regex = /[$][{][1-9][0-9]*[:][a-zA-Z0-9 ]{0,}[}]/g;
    const bodyTextPlaceholders: any = bodyText.match(regex) || [];

    this.placeholdersTags = new Map();
    let match;

    while ((match = regex.exec(bodyText)) != null) {
      const stopId: number = Number(
        match[0].substring(2, match[0].indexOf(':'))
      );
      const index: number = match.index;
      this.placeholdersTags.set(stopId, index);
    }

    placeholders.splice(0, placeholders.length);

    // Maps number of string matches: $12 -> 12 and returns that number as stopId parameter
    bodyTextPlaceholders.forEach((e: string) => {
      placeholders.push({
        // It should return only 1 item in array, which is number of stop
        stopId: Number(e.match(/[1-9][0-9]*(?=:)/g)[0]),
        name: e.substring(e.indexOf(':') + 1, e.indexOf('}'))
      });
    });
    // Depending on position of placeholders in text, array can contain un-ordered stopIds, thats why sort ([$1, $3, $2] => [$1, $2, $3])
    placeholders.sort(
      (placeholder1: IPlaceholder, placeholder2: IPlaceholder) =>
        placeholder1.stopId - placeholder2.stopId
    );
  }

  scanForChoices(bodyText: string, choices: Array<IChoice>) {
    choices.splice(0, choices.length);
    const regex = /[$][{][1-9][0-9]*[|][a-zA-Z0-9,]*[|][}]/g;
    const bodyTextChoices: any = bodyText.match(regex) || [];
    bodyTextChoices.forEach((choice: string) => {
      const newChoice: IChoice = {
        stopId: Number(choice.split('|')[0].substring(2)),
        placeholders: choice.split('|')[1].split(',')
      };
      choices.push(newChoice);
    });
  }

  removeTabstops(tabsSelectionList: Array<MatListOption>) {
    const tabs: Array<ITabstop> = tabsSelectionList.map(tab => tab.value);
    tabs.sort();
    tabs.forEach((tabNumber: ITabstop) => {
      let bodyText: string = this.body.value;
      bodyText = bodyText.replace('$' + tabNumber.stopId, '');
      this.tabstops.splice(
        this.tabstops.findIndex(
          (tab: ITabstop) => tab.stopId === tabNumber.stopId
        ),
        1
      );
      this.body.setValue(bodyText);
    });
  }

  removePlaceholders(placeholdersSelectionList: Array<MatListOption>) {
    const placeholders: Array<IPlaceholder> = placeholdersSelectionList.map(
      placeholder => placeholder.value
    );
    placeholders.forEach((placeholderNumber: IPlaceholder) => {
      let bodyText = this.body.value;
      bodyText = bodyText.replace(
        '${' + placeholderNumber.stopId + ':' + placeholderNumber.name + '}',
        ''
      );

      this.placeholders.splice(
        this.placeholders.findIndex(
          (placeholder: IPlaceholder) =>
            placeholder.stopId === placeholderNumber.stopId
        ),
        1
      );
      this.body.setValue(bodyText);
    });
  }

  removeChoice() {}

  addConstruct(
    constructType: string,
    stringIndex: any,
    event: KeyboardEvent
  ): number {
    switch (constructType) {
      case 'tabstop': {
        event.preventDefault();
        this.addTabstop(stringIndex);
        break;
      }
      case 'placeholder': {
        event.preventDefault();
        this.addPlaceholder(stringIndex);
        break;
      }
      case 'choice': {
        event.preventDefault();
        this.addChoice(stringIndex);
        break;
      }
      default: {
        break;
      }
    }
    return stringIndex;
  }

  nextStopIndex(): number {
    const newStopId =
      1 +
      Math.max(
        ...this.tabstops.map((tab: ITabstop) => tab.stopId),
        ...this.placeholders.map((placeholder: ITabstop) => placeholder.stopId),
        ...this.choices.map((tab: ITabstop) => tab.stopId)
      );
    return newStopId > 0 ? newStopId : 1;
  }

  addTabstop(stringIndex: number) {
    const newTabstop = {
      stopId: this.nextStopIndex()
    };
    let newBody: string = this.body.value;
    newBody =
      newBody.slice(0, stringIndex) +
      ('$' + newTabstop.stopId) +
      newBody.slice(stringIndex);
    this.body.setValue(newBody);
    this.tabstops.push(newTabstop);
  }

  addPlaceholder(stringIndex: number) {
    const newPlaceholder: IPlaceholder = {
      stopId: this.nextStopIndex(),
      name: ''
    };
    let newBody: string = this.body.value;
    newBody =
      newBody.slice(0, stringIndex) +
      ('${' + newPlaceholder.stopId + ':}') +
      newBody.slice(stringIndex);
    this.body.setValue(newBody);
    this.placeholders.push(newPlaceholder);
  }

  addChoice(stringIndex: number) {
    /* 
    const newPlaceholder: IPlaceholder = {
      stopId: this.nextStopIndex(),
      name: ''
    };
    let newBody: string = this.body.value;
    newBody =
      newBody.slice(0, stringIndex) +
      ('${' + newPlaceholder.stopId + '||}') +
      newBody.slice(stringIndex);
    this.body.setValue(newBody);
    this.placeholders.push(newPlaceholder); */
  }

  editPlaceholderName(placeholder: IPlaceholder, index: number) {
    let currTextAreaValue = this.body.value;

    const tagStartIndex = this.placeholdersTags.get(placeholder.stopId);

    const valueStartIndex = currTextAreaValue.indexOf(':', tagStartIndex) + 1; // +1 to remove :
    const valueEndIndex = currTextAreaValue.indexOf('}', valueStartIndex);

    currTextAreaValue =
      currTextAreaValue.substring(0, valueStartIndex) +
      placeholder.name +
      currTextAreaValue.substring(valueEndIndex);
  }
}
