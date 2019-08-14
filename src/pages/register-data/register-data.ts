import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterContactPage } from '../../pages/register-contact/register-contact';
import { ModalCheckCodePage } from '../../pages/modal-check-code/modal-check-code';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-data',
  templateUrl: 'register-data.html',
})
export class RegisterDataPage {
  public formData: FormGroup;
  public maxDate: string;
  private codeReference: string;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public modalCtrl:ModalController,
    private toastCtrl: ToastController) {

    this.formData = this.formBuilder.group({
      name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]],
      lastName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]],
      birthDate: ['', [Validators.required]],
      gender:['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    this.checkCode();
    this.maxDate=this.getDateToday();
  }

  public registerForm(): void{
    this.navCtrl.push(RegisterContactPage,{'form':this.formData});
  }

  private getDateToday(): string{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var dayToString = dd.toString();
    var monthToString = dd.toString();
    if(dd<10) {
        dayToString = '0'+ +dayToString;
    } 

    if(mm<10) {
        monthToString = '0'+monthToString;
    } 

    return  '2001-' + monthToString + '-' + dayToString;
  }

  private checkCode(): void {
    let modal =this.modalCtrl.create(ModalCheckCodePage);
    modal.present();
    modal.onDidDismiss(data=>{
      console.log(data);
      if(data.response == 200){
        this.presentToast('El código de referencia fue aceptado.');
        this.codeReference = data.code;
      }else{
        this.presentToast('El código de referencia fue rechazado.');
      }
    });
  }

  private presentToast(message:string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
    });
  
    toast.present();
  }


}

