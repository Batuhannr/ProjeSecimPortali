/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgrencilerComponent } from './ogrenciler.component';

describe('OgrencilerComponent', () => {
  let component: OgrencilerComponent;
  let fixture: ComponentFixture<OgrencilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrencilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrencilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
