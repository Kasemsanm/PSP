import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SingUpPage } from '../sing-up/sing-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  SingUppage() {
    this.navCtrl.push(SingUpPage);
  }
}
