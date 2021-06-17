/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonuOgrenciComponent } from './KonuOgrenci.component';

describe('KonuOgrenciComponent', () => {
  let component: KonuOgrenciComponent;
  let fixture: ComponentFixture<KonuOgrenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonuOgrenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonuOgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
