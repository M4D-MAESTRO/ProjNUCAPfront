import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { catchError } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { API_CONFIG } from 'src/config/api.config';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storage.getLocalUser(); 

        let N = API_CONFIG.baseUrl.length;
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl; 

        if (localUser && requestToAPI) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer' + localUser.token)});
            return next.handle(authReq).pipe(catchError((error, caught) => {



                
                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }
    
                console.log("Erro detectado pelo interceptor:");
                console.log(errorObj);
    
                return Observable.throw(errorObj);
            })) as any;;
        }
        else {

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
                
                            return Observable.throw(errorObj);
                        })) as any;
                    }

    }
        
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};