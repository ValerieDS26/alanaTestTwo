import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service' 
import { codeReference } from '../../class/codeReference'
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-check-code',
  templateUrl: 'modal-check-code.html',
})
export class ModalCheckCodePage {
  public formCode:FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public serviceProvider: ServiceProvider,
    private toastCtrl: ToastController) {
    
    this.formCode = this.formBuilder.group({
      code:['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
  }

  public sendCode(): void{
    this.serviceProvider.sendCode(this.formCode.value.code)
    .subscribe((response)=>{
      this.viewCtrl.dismiss({'response':response.code, 'code':this.formCode.value.code});
    },err=>{
      console.log(err);
      if(err.status == 409){
        this.presentToast();
      }
    })

  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

  private presentToast(): void {
    let toast = this.toastCtrl.create({
      message: 'El código de referencia ingresado no existe.',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
    });
  
    toast.present();
  }

}
