/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DerskonuComponent } from './derskonu.component';

describe('DerskonuComponent', () => {
  let component: DerskonuComponent;
  let fixture: ComponentFixture<DerskonuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerskonuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerskonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
