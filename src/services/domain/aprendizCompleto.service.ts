import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AprendizCompletoDTO } from "src/models/aprendizCompleto.dto";
import { Observable } from "rxjs";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";
import { AprendizFullDTO } from "src/models/aprendizFull.dto";

@Injectable()
export  class AprendizCompleto {

    constructor(public http: HttpClient, public storage: StorageService) {
        
    }

    findByEmail(email: string) : Observable<AprendizFullDTO> {
        return this.http.get<AprendizFullDTO>(`${API_CONFIG.baseUrl}aprendiz/email?value=${email}`);
        
    }

  /*  getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }*/

    insert(obj : AprendizCompletoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}aprendiz`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
     }
}