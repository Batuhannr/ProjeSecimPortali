/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgretmenlerComponent } from './Ogretmenler.component';

describe('OgretmenlerComponent', () => {
  let component: OgretmenlerComponent;
  let fixture: ComponentFixture<OgretmenlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgretmenlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgretmenlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
