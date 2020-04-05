/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopySnippetComponent } from './copy-snippet.component';

describe('CopySnippetComponent', () => {
  let component: CopySnippetComponent;
  let fixture: ComponentFixture<CopySnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopySnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopySnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
