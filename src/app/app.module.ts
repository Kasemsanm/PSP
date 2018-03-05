import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { SoftwarePage } from '../pages/software/software';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SingUpPage,
    MainMenuPage,
    SoftwarePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SingUpPage,
    MainMenuPage,
    SoftwarePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
