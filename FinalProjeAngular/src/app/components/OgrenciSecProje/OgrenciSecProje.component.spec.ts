/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgrenciSecProjeComponent } from './OgrenciSecProje.component';

describe('OgrenciSecProjeComponent', () => {
  let component: OgrenciSecProjeComponent;
  let fixture: ComponentFixture<OgrenciSecProjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrenciSecProjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciSecProjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
