import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/models/instituicao.dto';
import { InstituicaoService } from 'src/services/domain/instituicao.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { API_CONFIG } from 'src/config/api.config';
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';
import { request } from 'https';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.page.html',
  styleUrls: ['./instituicao.page.scss'],
})
export class InstituicaoPage implements OnInit {

  private items: Aprendiz_InstituicaoDTO;

  constructor(
    public instituicaoService: InstituicaoService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get("nome"));
    
    let nome = this.route.snapshot.paramMap.get("nome");
    let dataInicio = this.route.snapshot.paramMap.get("dataInicio");
    let dataTermino = this.route.snapshot.paramMap.get("dataTermino");
    let percentualFalta = this.route.snapshot.paramMap.get("percentualFalta");

    this.items = 
      {
        nome: nome.substring(0, nome.indexOf('-')),
        dataInicio: dataInicio,
        dataTermino: dataTermino,
        percentualFalta: percentualFalta   
      }


    //console.log(this.items);
    /*let alunos_id = router.navigate.get('alunos_id')
    this.instituicaoService.findByAlunos(alunos_id)
    .subscribe(response => {
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {}); //Aula 134*/

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


    /*this.items = [
    {
      nome: "itens",
      dataInicio: "27/09/2018",
      dataTermino: "28/09/2018",
      percentualFalta: "40"   
    }
  ]*/
  };
}
