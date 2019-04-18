import { Component, OnInit } from '@angular/core';
import { AprendizService } from 'src/services/domain/aprendiz.service';
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';
import { StorageService } from 'src/services/storage.service';
import { AprendizCompletoDTO } from 'src/models/aprendizCompleto.dto';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { Router } from '@angular/router';
import { AprendizFullDTO } from 'src/models/aprendizFull.dto';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  itens: Aprendiz_InstituicaoDTO[];
  aluno: AprendizFullDTO;


  constructor(
    public storage: StorageService,
    public aprendizService: AprendizService,
    public completoService: AprendizCompleto,
    private router: Router) { }



  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem('localUser'));
    this.completoService.findByEmail(obj.email).subscribe(response => {
      this.aluno = {
        id: response.id,
        nome: response.nome,
        telefone: response.telefone,
        email: response.email,
        endereco: null,
        cpf: response.cpf,
        dataNascimento: response.dataNascimento,
        cpfResp: response.cpfResp,
        telefoneResp: response.telefoneResp
      };

      console.log("Teste1: ");
      console.log(this.aluno);
    },
      error => {
        console.log(error);
      });
      
  }

  ionViewDidLeave(){
  }

  ionViewDidEnter() {
    //console.clear();
    //console.log("Nosso user" + localStorage.getItem('localUser'));
    
    let id = this.aluno.id.toString();
    

    this.aprendizService.findAll(id).subscribe(response => {
      this.itens = response;
      //console.log(response);
    },
      error => {
        console.log(error);
      });

  }
  showInstituicao(item: Aprendiz_InstituicaoDTO) {
    let nome = item.nome;
    let dataInicio = item.dataInicio;
    let dataTermino = item.dataTermino;
    let percentualFalta = item.percentualFalta;

    console.log("Meu item: " + nome);
    this.router.navigate(['instituicao', { nome, dataInicio, dataTermino, percentualFalta }]);
  }



}
