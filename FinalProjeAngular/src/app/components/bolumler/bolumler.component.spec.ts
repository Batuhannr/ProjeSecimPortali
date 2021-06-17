/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BolumlerComponent } from './bolumler.component';

describe('BolumlerComponent', () => {
  let component: BolumlerComponent;
  let fixture: ComponentFixture<BolumlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolumlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
