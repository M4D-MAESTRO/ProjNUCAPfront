import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/models/instituicao.dto';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.page.html',
  styleUrls: ['./instituicao.page.scss'],
})
export class InstituicaoPage implements OnInit {

  items : InstituicaoDTO[];

  constructor() { }

  ngOnInit() { this.items = [
    {
      dataInicio: "27/09/208",
      dataTermino: "28/09/2018",
      percentualFalta: "40"   
    }
  ]
};
}
