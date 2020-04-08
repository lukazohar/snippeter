/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrefixComponent } from './prefix.component';

describe('PrefixComponent', () => {
  let component: PrefixComponent;
  let fixture: ComponentFixture<PrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
