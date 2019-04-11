import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';
import { AprendizCompletoDTO } from 'src/models/aprendizCompleto.dto';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { API_CONFIG } from 'src/config/api.config';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

  aprendiz: AprendizCompletoDTO;

  constructor( 
    public storage: StorageService,
    private router: Router,
    public aprendizServiceCompleto: AprendizCompleto) { }
    

    ionViewWillEnter () {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.aprendizServiceCompleto.findByEmail(localUser.email)
      .subscribe(response => {
        this.aprendiz = response;
        // buscar imagem
      },
      error => {
        if (error.status == 403) {
          this.router.navigateByUrl('home');
        }
      });
  }
  else {
    this.router.navigateByUrl('home');
  }
 }

/* getImageExistis() {
   this.aprendizServiceCompleto.getImageFromBucket(this.aprendiz.id)
   .subscribe(response => {
     this.aprendiz.imageUrl = `${API_CONFIG.bucketBaseUrl}cp${this.aprendiz.id}.jpg`;
   },
   error => {});
 }*/

}
