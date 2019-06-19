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
      email: ['Henri10@hotmail.com',[Validators.required, Validators.email] ],
      cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      endereco : ['Rua Via', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', [Validators.required]],
      telefone : ['977261827', [Validators.required]],
      cpfResp : ['111', [Validators.required]],
      telefoneResp : ['999', [Validators.required]],
      idEstado : [2, [Validators.required]],
      idCidade : [1, [Validators.required]],
      idTrabalho : [null, [] ],
      idEscola : [null, []],
      idEmpresaQuali : [null, []]
    });
  } 
  updateCidades() {
    let estado_id = this.formGroup.value.idEstado;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response ;
     // console.log(this.cidades);
      this.formGroup.controls.idCidade.setValue(null);
    },
    error => {});
  }

  signupUser() {
    //console.log(this.formGroup.value)
    this.aprendizService.insert(this.formGroup.value)
    .subscribe(response => {
      this.showInsertOk(this.formGroup.value.nome + ' cadastrado com sucesso!' + 
      '<br>Um email foi enviado para: ' + this.formGroup.value.email);
    },
    error => {});
    
  }

  async showInsertOk(mensagem:string) {
    const alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: mensagem,
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

  ionViewWillEnter(){
    
  }

  ngOnInit() {
    this.estadoService.findAll().subscribe(response => {
      this.estados = response;
      console.log(this.estados);
      this.formGroup.controls.idEstado.setValue(this.estados[0].id); 
      this.updateCidades();
    },
    error => {});

    console.log(this.estados);
    
  }



}
