/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecProjeComponent } from './secProje.component';

describe('SecProjeComponent', () => {
  let component: SecProjeComponent;
  let fixture: ComponentFixture<SecProjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecProjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecProjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
