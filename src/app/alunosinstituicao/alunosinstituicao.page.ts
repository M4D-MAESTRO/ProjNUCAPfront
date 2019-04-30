import { Component, OnInit } from '@angular/core';
import { AprendizFullDTO } from 'src/models/aprendizFull.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { InstituicaoService } from 'src/services/domain/instituicao.service';
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';

@Component({
  selector: 'app-alunosinstituicao',
  templateUrl: './alunosinstituicao.page.html',
  styleUrls: ['./alunosinstituicao.page.scss'],
})
export class AlunosinstituicaoPage implements OnInit {
  dados:AprendizFullDTO;
  itens: Aprendiz_InstituicaoDTO[];

  constructor(
    private router: Router, private route: ActivatedRoute,
    public completoService: InstituicaoService) { }

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem('localUser'));
    this.completoService.findByEmail("centroedu@gmail.com"/*obj.email*/).subscribe(response => {
      this.dados = {
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
      console.log(this.dados); 
    },
      error => {
        console.log(error);
      });
      
  }

  ionViewDidEnter() {
    //console.clear();
    //console.log("Nosso user" + localStorage.getItem('localUser'));
    
    //let id = this.dados.id.toString();
    

    this.completoService.findAll("2").subscribe(response => {
      this.itens = response;
      console.log(response);
    },
      error => {
        console.log(error);
      });

  }
  showAlunoInstituicao(item: Aprendiz_InstituicaoDTO) {
    let nome = item.nome;
    let dataInicio = item.dataInicio;
    let dataTermino = item.dataTermino;
    let percentualFalta = item.percentualFalta;

    console.log("Meu item: " + nome);
    this.router.navigate(['alunoinfo', { nome, dataInicio, dataTermino, percentualFalta }]);
  }

  


}
