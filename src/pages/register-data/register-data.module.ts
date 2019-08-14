import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDataPage } from './register-data';

@NgModule({
  declarations: [
    RegisterDataPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDataPage),
  ],
})
export class RegisterDataPageModule {}
