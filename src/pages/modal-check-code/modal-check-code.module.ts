import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCheckCodePage } from './modal-check-code';

@NgModule({
  declarations: [
    ModalCheckCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCheckCodePage),
  ],
})
export class ModalCheckCodePageModule {}
