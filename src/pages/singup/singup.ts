import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  account:{
    email:string,
    password:string
  }={
    email : "youremail@email.com",
    password : "12345678"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }
  
  SingUp() {
    this.navCtrl.push(HomePage)
  }

}
