import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage /*implements OnInit*/ {


  creds: CredenciaisDTO = {
    email: "lhccorrea@hotmail.com",
    senha: "senha4"
  };

  constructor(
    private router: Router,
    public menu: MenuController,
    public auth: AuthService,
       ) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    console.clear();
    console.log(localStorage.getItem('localUser'));



  }


  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    this.menu.enable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('alunos');
      },
        error => { });

  }
  /*ngOnInit(): void {
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.router.navigateByUrl('alunos');
    },
    error => {});
  }*/


  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('alunos');
      },
        error => { });

  }

  signup() {
    this.router.navigateByUrl('signup');

  }


}


