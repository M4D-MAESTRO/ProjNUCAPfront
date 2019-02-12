import { Component, OnInit } from '@angular/core';
import { AprendizService } from 'src/services/domain/aprendiz.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor(public aprendizService:AprendizService  ) { }

  ngOnInit() {
    this.aprendizService.findAll().subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }); 
  }

}
