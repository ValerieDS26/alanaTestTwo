import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDataPage } from '../../pages/register-data/register-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {

  }

  public registerForm(): void{
    this.navCtrl.push(RegisterDataPage);
  }

}
