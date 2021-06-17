/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgretmenDersComponent } from './ogretmen-ders.component';

describe('OgretmenDersComponent', () => {
  let component: OgretmenDersComponent;
  let fixture: ComponentFixture<OgretmenDersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgretmenDersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgretmenDersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
