
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from "rxjs"; // IMPORTANTE: IMPORT ATUALIZADO
import { Aprendiz_InstituicaoDTO } from 'src/models/aprendiz_instituicao.dto';
import { AprendizFullDTO } from 'src/models/aprendizFull.dto';

@Injectable()
export class InstituicaoService {

  constructor(public http: HttpClient) {
  }

  findByAlunos(alunos_id : string) {
    return this.http.get(`${API_CONFIG.baseUrl}instituicao/?alunos=${alunos_id}`);
  }

  findAll(id:string) : Observable<Aprendiz_InstituicaoDTO[]>{
    return this.http.get<Aprendiz_InstituicaoDTO[]>(`${API_CONFIG.baseUrl}instituicao/${id}/alunos`);
}

findByEmail(email: string) : Observable<AprendizFullDTO> {
  return this.http.get<AprendizFullDTO>(`${API_CONFIG.baseUrl}instituicao/email?value=${email}`);
  
}

  /*getSmallImageFromBucket(id : string) : Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
    return this.http.get(url, {responseType : 'blob'});
  }  Aula 135, codigo certo, só liberar quando por as imagens no bucket*/
}