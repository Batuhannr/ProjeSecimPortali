/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DersOgrenciComponent } from './DersOgrenci.component';

describe('DersOgrenciComponent', () => {
  let component: DersOgrenciComponent;
  let fixture: ComponentFixture<DersOgrenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DersOgrenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DersOgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
