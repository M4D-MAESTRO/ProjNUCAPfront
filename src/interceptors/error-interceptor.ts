import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { catchError } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { AlertController } from '@ionic/angular';

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

    async handleDefaultEror(errorObj) {
        const alert = await this.alertCtrl.create({
            header: 'Erro ' + errorObj.status + ':' + errorObj.error,
            message: errorObj.message,
            buttons: ['OK']
        });
        await alert.present()

    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};