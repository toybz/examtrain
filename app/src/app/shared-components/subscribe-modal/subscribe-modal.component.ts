import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent implements OnInit {

  constructor(private  modalControl: PopoverController) {
  }

  ngOnInit() {
  }

  subscribe() {
    this.modalControl.dismiss({
      action: "subscribe"
    });
  }

  cancel() {
    this.modalControl.dismiss({
      action: "cancel"
    });
  }
}
