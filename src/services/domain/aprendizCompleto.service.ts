import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AprendizCompletoDTO } from "src/models/aprendizCompleto.dto";
import { Observable } from "rxjs";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export  class AprendizCompleto {

    constructor(public http: HttpClient, public storage: StorageService) {
        
    }

    findByEmail(email: string) : Observable<AprendizCompletoDTO> {

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

        return this.http.get<AprendizCompletoDTO>(
            `${API_CONFIG.baseUrl}aprendiz/email?value=${email}`, 
            {'headers': authHeader});
        
    }

  /*  getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }*/

}