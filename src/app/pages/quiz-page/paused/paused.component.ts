import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";

@Component({
  selector: "app-paused",
  templateUrl: "./paused.component.html",
  styleUrls: ["./paused.component.scss"]
})
export class PausedComponent implements OnInit {
  @Input() data: any;

  constructor(
    public modalController: PopoverController,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.localStorage.savePausedQuiz(this.data);
  }

  resumeQuiz() {
    this.localStorage.deletePausedQuiz();

    this.modalController.dismiss({
      action: "resume"
    });
  }

  restartQuiz() {
    this.localStorage.deletePausedQuiz();

    this.modalController.dismiss({
      action: "reload"
    });
  }

  backToDashboard() {
    this.modalController.dismiss({
      action: "navigateToDashboard"
    });
  }
}
