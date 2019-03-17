import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController, PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {RewardModalComponent} from '../reward-modal/reward-modal.component';
import {MemesService} from '../memes.service';
import {Observable, ReplaySubject} from 'rxjs/index';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.scss']
})
export class QuizReviewComponent implements OnInit {

    @Input() correct_answers_count: number;
    @Input() questions: any;
    @Input() quiz_config: any;
    show_corrections = false
    $memesUrl
    showMemes = new ReplaySubject(1);
    review

    constructor(private modalController: ModalController , private route: ActivatedRoute , private router: Router , public actionSheetController: ActionSheetController , private popoverController: PopoverController, public memesService: MemesService , public localStorage : LocalStorageService) { }



  ngOnInit() {

      let score_in_percent = this.correct_answers_count/this.quiz_config.amount * 100

      console.log(score_in_percent)

      if(score_in_percent <= 30){
          // very poorr
          this.review = "Uh Oh"
      }
      else if(score_in_percent <= 50){
          // ok
          this.review = "Nice one"

      }
      else if(score_in_percent <= 70){
          // average
          this.review = "That's Great"

      }
      else if(score_in_percent <= 100){
          // very poorr
          this.review = "You The Champ. Great Job"

      }


       this.localStorage.getOtherData().subscribe((other_data)=>{
           this.showMemes = other_data.show_memes
      })


        this.$memesUrl =   this.memesService.generateMemes(score_in_percent)





  }

    updateMemesSettings(){
        console.log(this.showMemes)
        this.localStorage.saveOtherData({show_memes: this.showMemes})
    }


  dismissModal(data: {}){
      this.modalController.dismiss(data)
  }




    async showOptions() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Options',
            buttons: [{
                text: 'Play Again',
                role: 'destructive',
                icon: 'refresh',
                handler: () => {
this.dismissModal({
    'action': 'reload'
})
                }
            }, {
                text: 'New Quiz',
                icon: 'play',
                handler: () => {
                    this.dismissModal({
                        'action': 'new_quiz'
                    })
                }
            }, {
                text: 'Share',
                icon: 'share',
                handler: () => {
                    this.dismissModal({
                        'action': 'share'
                    })
                }
            },
                {
                    text: 'Dashboard',
                    icon: 'analytics',
                    handler: () => {
                        this.dismissModal({
                            'action': 'dashboard'
                        })
                    }
                },


                {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

    share(){
        console.log("Share To SM")
    }

    showCorrections(id){

        this.show_corrections = !this.show_corrections

        if(this.show_corrections){
            setTimeout(()=>{
                let el = document.getElementById(id);
                console.log(el)
                el.scrollIntoView({behavior:"smooth"});
            }, 500)
        }

        else{
            let el = document.getElementById(id);
            console.log(el)
            el.scrollIntoView({behavior:"smooth"});
        }






    }



}
