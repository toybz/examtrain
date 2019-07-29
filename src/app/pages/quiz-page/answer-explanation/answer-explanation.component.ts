import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-answer-explanation',
  templateUrl: './answer-explanation.component.html',
  styleUrls: ['./answer-explanation.component.scss']
})
export class AnswerExplanationComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  goBack(){
      this.modalController.dismiss({
      });
  }

}
