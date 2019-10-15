import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { PwaService } from "./services/pwa/pwa.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "./services/local-storage/local-storage.service";
import {UserService} from "./services/user/user.service";
import {AuthTokenInterceptorService} from "./auth-token-interceptor.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public show_add_to_home = false;

    is_user_signed_in:any

     appPages = [];

user: any
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public pwa: PwaService,
        private router: Router,
        private localStorage: LocalStorageService,
        private userService: UserService
    ) {

        this.initializeApp();

    this.user = localStorage.getUser()

     this.user.subscribe((user:any)=>{

        this.is_user_signed_in = user.signed_in
         console.log( this.is_user_signed_in)
         this.appPages = [
             {
                 title: 'Home',
                 url: '/home',
                 icon: 'home',
                 should_display: true
             },

             {
                 title: 'Logout',
                 url: '#',
                 icon: 'log-out',
                 should_display:  this.is_user_signed_in ,
                 click_handler: ()=>{

                     this.userService.logOut()
                     this.router.navigate(['login'])


                  /*   this.userService.logOut().subscribe(()=>{
                         this.router.navigate(['login'])
                     })*/

                 }
             } ,

             {
                 title: 'Login',
                 url: '/login',
                 icon: 'log-in' ,
                 should_display:  !this.is_user_signed_in
             },


         ];
     })


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
      // this.router.navigate(["login"]);
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
