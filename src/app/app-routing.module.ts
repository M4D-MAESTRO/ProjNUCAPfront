import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'teste', loadChildren: './teste/teste.module#TestePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
  	FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
