import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "src/config/api.config";
import { Observable } from "rxjs";
import { Aprendiz_InstituicaoDTO } from "src/models/aprendiz_instituicao.dto";

@Injectable()
export class AprendizService{

    constructor(public http: HttpClient){

    }

    findAll(id:string) : Observable<Aprendiz_InstituicaoDTO[]>{
        return this.http.get<Aprendiz_InstituicaoDTO[]>(`${API_CONFIG.baseUrl}aprendiz/${id}/instituicoes`);
    }
    findInstituicoes(id:string) : Observable<Aprendiz_InstituicaoDTO[]>{
        return this.http.get<Aprendiz_InstituicaoDTO[]>(`${API_CONFIG.baseUrl}aprendiz/${id}`);
    }

}