import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";

@Component({
  selector: "app-onboarding-page",
  templateUrl: "./onboarding-page.page.html",
  styleUrls: ["./onboarding-page.page.scss"]
})
export class OnboardingPagePage implements OnInit {


    slideOpts = {
        initialSlide: 0,
        slidesPerView : 1,
      //  speed: 400,
        pager: true,

    };
  constructor(private router: Router, private localStorage: LocalStorageService) {}

  ngOnInit() {}

    start(){
      console.log("Nav")
       this.localStorage.saveOtherData({ first_time: false });
        this.router.navigate(["tabs/quiz"]);
    }
}
