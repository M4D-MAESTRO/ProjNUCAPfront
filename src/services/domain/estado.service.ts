import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "src/config/api.config";
import { Observable } from "rxjs";
import { EstadoDTO } from "src/models/estado.dto";

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){

    }

    findAll(estado_id : string) : Observable<EstadoDTO[]>{
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}estados`);
    }

}