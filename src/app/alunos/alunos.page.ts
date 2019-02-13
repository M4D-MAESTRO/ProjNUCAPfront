import { Component, OnInit } from '@angular/core';
import { AprendizService } from 'src/services/domain/aprendiz.service';
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  itens: Aprendiz_InstituicaoDTO[];

  constructor(public aprendizService: AprendizService) { }

  ngOnInit() {
    this.aprendizService.findAll().subscribe(response => {
      this.itens = response;
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

  

}
