import { Component, OnInit } from '@angular/core';
import { AprendizFullDTO } from 'src/models/aprendizFull.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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


   /* let id = this.route.snapshot.paramMap.get("id");
    let nome = this.route.snapshot.paramMap.get("nome");
    let telefone = this.route.snapshot.paramMap.get("telefone");
    let email = this.route.snapshot.paramMap.get("email");
    let endereco = this.route.snapshot.paramMap.get("endereco");
    let cpf = this.route.snapshot.paramMap.get("cpf");
    let dataNascimento = this.route.snapshot.paramMap.get("dataNascimento");
    let cpfResp = this.route.snapshot.paramMap.get("cpfResp");
    let telefoneResp = this.route.snapshot.paramMap.get("telefoneResp"); */
    
    

   /* this.dados = {
      id: id,
      nome:nome,
      telefone: telefone,
      email: email,
      endereco: endereco,
      cpf: cpf,
      dataNascimento: dataNascimento,
      cpfResp: cpfResp,
      telefoneResp: telefoneResp


    }*/

    
  }

