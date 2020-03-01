import { Component } from "@angular/core";

import {ModalController, Platform} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { PwaService } from "./services/pwa/pwa.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "./services/local-storage/local-storage.service";
import {UserService} from "./services/user/user.service";
import {AuthTokenInterceptorService} from "./auth-token-interceptor.service";
import {ShareComponent} from "./shared-components/share/share.component";
import {ShareMonitorService} from "./services/app-monitor/share-monitor.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {

    public show_add_to_home = false;

    is_user_signed_in:any
    user_details


    appPages = [];

user: any

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public pwa: PwaService,
        private router: Router,
        private localStorage: LocalStorageService,
        private userService: UserService,
        public modalController: ModalController,
        public shareService: ShareMonitorService
    ) {





        this.initializeApp();

        this.user = localStorage.getUser()

        this.user.subscribe((user: any) => {

            this.is_user_signed_in = user.signed_in
            this.user_details = user

            console.log(user)
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
                    should_display: this.is_user_signed_in,
                    click_handler: () => {

                        this.userService.logOut()
                        this.router.navigate(['login'])


                        /*   this.userService.logOut().subscribe(()=>{
                               this.router.navigate(['login'])
                           })*/

                    }
                },

                {
                    title: 'Login',
                    url: '/login',
                    icon: 'log-in',
                    should_display: !this.is_user_signed_in
                },


                {
                    title: 'Subscribe',
                    url: '/subscribe',
                    icon: 'key',
                    should_display: true
                },




                {
                    title: 'Share App',
                    url: '#',
                    icon: 'share',
                    should_display: true,
                    click_handler: () => {
                        this.showShare()

                    }
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
     //  this.router.navigate(["onboard"]);
      if (first_visit) {

        this.router.navigate(["onboard"]);
      }
    });
  }


  addToHome() {
    this.pwa.installPwa();
    this.show_add_to_home = false;
  }


    async  showShare() {

    this.shareService.showShare()

      /*  const modal = await this.modalController.create({
            component: ShareComponent
        });
        return await modal.present();*/
    }




}
