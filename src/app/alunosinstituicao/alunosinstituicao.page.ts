import { Component, OnInit } from '@angular/core';
import { AprendizFullDTO } from 'src/models/aprendizFull.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';

@Component({
  selector: 'app-alunosinstituicao',
  templateUrl: './alunosinstituicao.page.html',
  styleUrls: ['./alunosinstituicao.page.scss'],
})
export class AlunosinstituicaoPage implements OnInit {
  dados:AprendizFullDTO;

  constructor(
    private router: Router, private route: ActivatedRoute,
    public completoService: AprendizCompleto) { }

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem('localUser'));
    this.completoService.findByEmail(obj.email).subscribe(response => {
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
  


}
