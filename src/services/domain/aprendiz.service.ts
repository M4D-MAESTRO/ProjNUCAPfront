import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AprendizService{

    constructor(public http: HttpClient){

    }

    findAll(){
        return this.http.get("localhost:8090/instituicao/2019200/alunos");
    }

}