/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BolumOgrenciComponent } from './BolumOgrenci.component';

describe('BolumOgrenciComponent', () => {
  let component: BolumOgrenciComponent;
  let fixture: ComponentFixture<BolumOgrenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolumOgrenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumOgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
