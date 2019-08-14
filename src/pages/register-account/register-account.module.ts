import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAccountPage } from './register-account';
import { AbstractControl } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAccountPage),
  ],
})
export class RegisterAccountPageModule {

  static MatchPassword(abstCtrl: AbstractControl) {
    let password = abstCtrl.get('password').value; // to get value in input tag
    let confirmPassword = abstCtrl.get('confirmPassword').value; // to get value in input tag
     if(password != confirmPassword) {
         abstCtrl.get('confirmPassword').setErrors( {MatchPassword: true} )
     } else {
         return null
     }
 }
}
