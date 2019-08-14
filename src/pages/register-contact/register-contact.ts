import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAccountPage } from '../../pages/register-account/register-account';



@IonicPage()
@Component({
  selector: 'page-register-contact',
  templateUrl: 'register-contact.html',
})
export class RegisterContactPage {
  public formContact: FormGroup;
  public countries : Array<string>;
  private formData: any;
  private codeRefence: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.countries =['Venezuela','Colombia'];

    this.formContact = this.formBuilder.group({
      country: ['',[Validators.required]],
      codCountry: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      direction: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    this.formData = this.navParams.get('form');
    this.codeRefence=this.navParams.get('code');
  }

  public registerAccount(): void{
    this.navCtrl.push(RegisterAccountPage,{'formContact':this.formContact, 'formData': this.formData,'code': this.codeRefence });
  }

}
