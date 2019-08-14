import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAccountPageModule } from './register-account.module';


/**
 * Generated class for the RegisterAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-account',
  templateUrl: 'register-account.html',
})
export class RegisterAccountPage {
  public formAccount: FormGroup;
  public passwordType: string = 'password';
  public passwordIcon: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.formAccount = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },{
      validator: RegisterAccountPageModule.MatchPassword
    });
    this.passwordType = 'password';
    this.passwordIcon = 'eye';
  }

  ionViewDidLoad() {
    
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }
}
