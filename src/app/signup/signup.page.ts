import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { AlertController } from '@ionic/angular';
import { text } from '@angular/core/src/render3';
import { Router } from '@angular/router';


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
    public estadoService: EstadoService,
    public aprendizService: AprendizCompleto,
    private router: Router,
    public alertCtrl: AlertController) { 

    this.formGroup = this.formBuilder.group({
      nome: ['Henrique Castrado',[Validators.required, Validators.minLength(3), Validators.maxLength(120)] ],
      email: ['Henri@hotmail.com',[Validators.required, Validators.email] ],
      cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      endereco : ['Rua Via', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', [Validators.required]],
      telefone : ['977261827', [Validators.required]],
      cpfResp : [null, [Validators.required]],
      telefoneResp : [null, [Validators.required]],
      estadoId : [null, [Validators.required]],
      cidadeId : [null, [Validators.required]],
      idTrabalho : [1, [Validators.required]],
      idEscola : [1, [Validators.required]],
      idEmpresaQuali : [1, [Validators.required]]
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
    
    this.aprendizService.insert(this.formGroup.value)
    .subscribe(response => {
      this.showInsertOk();
    },
    error => {});
    
  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      buttons: [
        {
        text: 'ok',
        handler: () => {
          this.router.navigateByUrl('home');
        }
        }
      ]
    });
    await alert.present()

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
