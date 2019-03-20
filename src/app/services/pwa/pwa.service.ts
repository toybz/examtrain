import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PwaService {
  promptEvent: any;
  promptStream = new ReplaySubject(1);

  constructor(private swUpdate: SwUpdate) {
    /*swUpdate.available.subscribe(event => {
      if (askUserToUpdate()) {
        window.location.reload();

      }
    }); */

    window.addEventListener("beforeinstallprompt", (event: any) => {
      this.promptEvent = event;
      this.promptStream.next(event);
    });
  }

  installPwa(): void {
    // console.log(this.promptEvent);
    this.promptEvent.prompt();
  }
}
