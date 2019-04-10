import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { catchError } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { AlertController } from '@ionic/angular';
import { FieldMessage } from 'src/models/fieldmessage';

//Concertei o INTERCEPTOR! 
//100% funcional agora ZÉÉÉÉÉÉÉÉÉÉÉ
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage : StorageService, public alertCtrl: AlertController) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        return next.handle(req).pipe(catchError((error, caught) => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);

            switch(errorObj.status) {
                case 401:
                this.handle401();
                break;

                case 403:
                this.handle403();
                break;

                case 422:
                this.handle422(errorObj);
                break;

                default:
                this.handleDefaultEror(errorObj);
            }

            return Observable.throw(errorObj);
        })) as any;
    }

    handle403() {
        this.storage.setLocalUser(null);
    }

    async handle401() {
        const alert = await this.alertCtrl.create({
            header: 'Erro 401:',
            subHeader: 'Falha na autenticação',
            message: 'Email ou senha incorretos',
            buttons: ['OK']
        });
        await alert.present()
    }

    async handle422(errorObj) {
        const alert = await this.alertCtrl.create({
            header: 'Erro 422: Validação',
            message: this.listErrors(errorObj.erros),
            buttons: ['OK']
        });
        await alert.present()

    } 
    

    async handleDefaultEror(errorObj) {
        const alert = await this.alertCtrl.create({
            header: 'Erro ' + errorObj.status + ':' + errorObj.error,
            message: errorObj.message,
            buttons: ['OK']
        });
        await alert.present()

    }

    private listErrors(messages : FieldMessage[]) : string {
        let s : string = '';
        for (var i=0; i<messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    } 
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};