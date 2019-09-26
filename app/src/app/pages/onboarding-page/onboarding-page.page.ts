import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}
}
