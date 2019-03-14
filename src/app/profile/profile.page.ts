import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { AprendizCompletoDTO } from 'src/models/aprendizCompleto.dto';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { API_CONFIG } from 'src/config/api.config';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  aprendiz: AprendizCompletoDTO;
 
  

  constructor( 
    public storage: StorageService,
    //public navParams: NavParams, 
    public aprendizServiceCompleto: AprendizCompleto) { }
    

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.aprendizServiceCompleto.findByEmail(localUser.email)
      .subscribe(response => {
        this.aprendiz = response;
        // buscar imagem
      },
      error => {
        if (error.status == 403) {
          this.navCtrl.setRoot('HomePage');
        }
      });
  }
  else {
    this.navCtrl.setRoot('HomePage');
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
