import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) { 

    this.formGroup = this.formBuilder.group({
      nome: ['Henrique Castrado',[Validators.required, Validators.minLength(5), Validators.maxLength(120)] ],
      email: ['Henri@hotmail.com',[Validators.required, Validators.email] ],
      tipo : ['1', [Validators.required]],
      cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      logradouro : ['Rua Via', [Validators.required]],
      numero : ['25', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', []],
      cep : ['10828333', [Validators.required]],
      telefone1 : ['977261827', [Validators.required]],
      telefone2 : ['', []],
      telefone3 : ['', []],
      estadoId : [null, [Validators.required]],
      cidadeId : [null, [Validators.required]]
    });
  }

  signupUser() {
    console.log("Enviou o form");
  }

  ngOnInit() {
  }

}
