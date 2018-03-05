import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';

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
  SingupPage() {
    this.navCtrl.push(SingupPage);
  }
}
