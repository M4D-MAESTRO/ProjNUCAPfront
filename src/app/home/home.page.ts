import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  creds : CredenciaisDTO = {
     email: "",
     senha: ""
  };

  constructor( private router: Router, public menu:MenuController ) { 

  }

  ionViewWillEnter () {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    console.log("1 - Funcionou");
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    this.menu.enable(true);
    console.log("2 - Funcionou");
  }

  login(){
    console.log(this.creds);
    this.router.navigateByUrl('alunos');
  }

}


