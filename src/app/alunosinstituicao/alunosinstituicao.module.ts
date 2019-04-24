import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunosinstituicaoPage } from './alunosinstituicao.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosinstituicaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunosinstituicaoPage]
})
export class AlunosinstituicaoPageModule {}
