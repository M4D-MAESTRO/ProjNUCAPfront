import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AprendizService } from 'src/services/domain/aprendiz.service';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
import { HttpModule } from '@angular/http';
import { AprendizCompleto } from 'src/services/domain/aprendizCompleto.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth-interceptor';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InstituicaoService } from 'src/services/domain/instituicao.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AprendizService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    AprendizCompleto,
    InstituicaoService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
