import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterDataPage } from '../pages/register-data/register-data';
import { RegisterContactPage } from '../pages/register-contact/register-contact';
import { RegisterAccountPage } from '../pages/register-account/register-account';
import { ModalCheckCodePage } from '../pages/modal-check-code/modal-check-code';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterDataPage,
    RegisterContactPage,
    RegisterAccountPage,
    ModalCheckCodePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{scrollPadding: false})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterDataPage,
    RegisterContactPage,
    RegisterAccountPage,
    ModalCheckCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
