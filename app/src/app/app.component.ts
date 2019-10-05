import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { PwaService } from "./services/pwa/pwa.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "./services/local-storage/local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public show_add_to_home = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public pwa: PwaService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.pwa.promptStream.subscribe(() => {
      this.show_add_to_home = true;
    });

    this.localStorage.getOtherData().subscribe((other_data: any) => {
      let first_visit = other_data.first_time;
    //    this.router.navigate(["onboard"]);
      if (first_visit) {

        this.router.navigate(["onboard"]);
      }
    });
  }


  addToHome() {
    this.pwa.installPwa();
    this.show_add_to_home = false;
  }
}
