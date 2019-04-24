import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosinstituicaoPage } from './alunosinstituicao.page';

describe('AlunosinstituicaoPage', () => {
  let component: AlunosinstituicaoPage;
  let fixture: ComponentFixture<AlunosinstituicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosinstituicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosinstituicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
