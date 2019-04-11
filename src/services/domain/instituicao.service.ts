
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from "rxjs"; // IMPORTANTE: IMPORT ATUALIZADO

@Injectable()
export class InstituicaoService {

  constructor(public http: HttpClient) {
  }

  findByAlunos(alunos_id : string) {
    return this.http.get(`${API_CONFIG.baseUrl}instituicao/?alunos=${alunos_id}`);
  }

  /*getSmallImageFromBucket(id : string) : Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
    return this.http.get(url, {responseType : 'blob'});
  }  Aula 135, codigo certo, só liberar quando por as imagens no bucket*/
}