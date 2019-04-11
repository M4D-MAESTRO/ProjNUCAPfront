import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/models/instituicao.dto';
import { InstituicaoService } from 'src/services/domain/instituicao.service';
import { Router } from '@angular/router';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.page.html',
  styleUrls: ['./instituicao.page.scss'],
})
export class InstituicaoPage implements OnInit {

  items : InstituicaoDTO[];

  constructor(
    public instituicaoService: InstituicaoService,
    private router: Router) { }

  ngOnInit() { 
    /*let alunos_id = router.navigate.get('alunos_id')
    this.instituicaoService.findByAlunos(alunos_id)
    .subscribe(response => {
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {}); Aula 134*/ 

    /*loadImageUrls() {
      for (var i=0; i<this.items.length; i++) {
        let item = this.items[i];
        this.instituicaoService.getSmallImageFromBucket(item.id)
          .subscribe(response => {
            item.imageUrl = `${API_CONFIG.bucketBaseUrl}prod${item.id}-small.jpg`;
          },
          error => {});
      }
    } Aula 135, só liberar quando por as imagens no bucket*/
    
    
    this.items = [
    {
      dataInicio: "27/09/2018",
      dataTermino: "28/09/2018",
      percentualFalta: "40"   
    }
  ]
};
}
