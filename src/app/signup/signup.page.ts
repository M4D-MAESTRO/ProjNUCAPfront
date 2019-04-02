import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public formBuilder: FormBuilder, 
    public cidadeService: CidadeService,
    public estadoService: EstadoService) { 

    this.formGroup = this.formBuilder.group({
      nome: ['Henrique Castrado',[Validators.required, Validators.minLength(3), Validators.maxLength(120)] ],
      email: ['Henri@hotmail.com',[Validators.required, Validators.email] ],
      tipo : ['1', [Validators.required]],
      cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      logradouro : ['Rua Via', [Validators.required]],
      numero : ['25', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', [Validators.required]],
      cep : ['10828333', [Validators.required]],
      telefone1 : ['977261827', [Validators.required]],
      telefone2 : ['', []],
      telefone3 : ['', []],
      estadoId : [null, [Validators.required]],
      cidadeId : [null, [Validators.required]]
    });
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response ;
      this.formGroup.controls.cidadeId.setValue(null);
    },
    error => {});
  }

  signupUser() {
    console.log("Enviou o form");
  }

  ngOnInit() {
    this.estadoService.findAll().subscribe(response => {
      this.estados = response;
      this.formGroup.controls.estadoId.setValue(this.estados[0].id); 
      this.updateCidades();
    },
    error => {});
  }

}
