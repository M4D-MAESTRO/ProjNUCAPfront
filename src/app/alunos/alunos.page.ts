import { Component, OnInit } from '@angular/core';
import { AprendizService } from 'src/services/domain/aprendiz.service';
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';
import { StorageService } from 'src/services/storage.service';
import { AprendizCompletoDTO } from 'src/models/aprendizCompleto.dto';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  itens: Aprendiz_InstituicaoDTO[];
  aluno:AprendizCompletoDTO;
  

  constructor(
    public storage: StorageService,
    public aprendizService: AprendizService,
    public completoService: AprendizCompleto,
    private router: Router) { }



  ngOnInit() {
    
  }

  ionViewDidEnter(){
    console.clear();
    console.log("Nosso user" + localStorage.getItem('localUser'));
    let obj = JSON.parse(localStorage.getItem('localUser'));
    let teste = this.completoService.findByEmail(obj.email);
    
    this.aprendizService.findAll().subscribe(response => {
      this.itens = response;
      console.log(response);
    },
      error => {
        console.log(error);
      });

  }
  showInstituicao(/*alunos_id : string*/) {
    this.router.navigateByUrl('instituicao'/*, {alunos_id: alunos_id}*/); //aula 134

  }

  

}
