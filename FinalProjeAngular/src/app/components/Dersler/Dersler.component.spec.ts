/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DerslerComponent } from './Dersler.component';

describe('DerslerComponent', () => {
  let component: DerslerComponent;
  let fixture: ComponentFixture<DerslerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerslerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
