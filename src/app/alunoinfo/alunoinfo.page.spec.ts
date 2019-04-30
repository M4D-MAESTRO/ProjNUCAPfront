import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoinfoPage } from './alunoinfo.page';

describe('AlunoinfoPage', () => {
  let component: AlunoinfoPage;
  let fixture: ComponentFixture<AlunoinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
