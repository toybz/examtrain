import { Injectable } from '@angular/core';
import {ShareComponent} from "../../shared-components/share/share.component";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {UserService} from "../user/user.service";
import {ModalController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ShareMonitorService {

  share_config = {
    share_interval: 5, //days

  }
  modal
  constructor( private localStorage: LocalStorageService,
               private userService: UserService,
               public modalController: ModalController) {



      //    this.showShare()

  }

    async  showShare() {

     this.modal = await this.modalController.create({
            component: ShareComponent
        });
       await this.modal.present();
        return this.modal
    }


    saveUserShareCount(){

 }

 getUserShareCount(){

 }


}
