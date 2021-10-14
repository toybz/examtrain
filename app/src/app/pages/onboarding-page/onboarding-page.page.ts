import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonSlides} from '@ionic/angular';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';


@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.page.html',
  styleUrls: ['./onboarding-page.page.scss']
})
export class OnboardingPagePage implements OnInit {

    slideOpts = {
        initialSlide: 0,
        slidesPerView: 1
    };
    @ViewChild(IonSlides) slider: IonSlides;

    constructor(private router: Router, private localStorage: LocalStorageService) {
    }

    ngOnInit() {

this.scrollToBottom();
    }



    scrollToBottom() {

        window.scrollTo(0, document.body.scrollHeight);
    }




    start() {
      console.log('Nav');
       this.localStorage.saveOtherData({ first_time: false });
        this.router.navigate(['/tabs/quiz']);
    }




    slide(direction) {
        if (direction == 'next') {
            this.slider.slideNext();
        } else {
            this.slider.slidePrev();
        }
    }

}
