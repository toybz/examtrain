import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
    custom_navigator: any = window.navigator;

    user_has_shared

   /* user_share_data = {
        number_of_share: 0,
        current_quiz_count: 10,
        next_quiz_count: this.user_share_data.current_quiz_count+10
    }*/

  constructor(private  modalControl: ModalController,
              private localStorage: LocalStorageService) {

      this.localStorage.getOtherData().subscribe((other_data: any)=>{
          this.user_has_shared = other_data.has_shared
      })

  }

  ngOnInit() {
  }



  share(platform:string){

      let share_text = "Hello, just came across this awesome Exam preparation app, app.examTrain.ng .You can use it  for FREE to get access to past questions and tutorials for JAMB, WAEC, Post Jamb, GCE, ICAN etc. Please share with your friends and relatives so they can benefit from it"

      switch (platform) {
          case 'facebook':
            console.log('shareTO' , platform)

              // @ts-ignore
              FB.ui({
                  method: 'share',
                  href: 'https://app.examtrain.ng',
                  quote: share_text
              }, function(response){});

            break

          case 'twitter':
             /* <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=Hello%20world"
              data-size="large">
                  Tweet</a>*/

             const tweet = "Hello, just came across this awesome Exam preparation app, app.examTrain.ng .Its FREE for past questions and tutorials for JAMB, WAEC, Post Jamb, GCE, ICAN etc. Please share with your friends and relatives so they can benefit from it"


              let tweet_url = "https://twitter.com/intent/tweet?text="+ tweet+"&hashtags=edtech,jamb,waec,exam"
              window.open(tweet_url);
              console.log('shareTO' , platform)
              break

          case 'whatsapp':

              const whatsapp_share_url = `https://api.whatsapp.com/send?text=${share_text}`;
              window.open(whatsapp_share_url);
              console.log('shareTO' , platform)
              break

          case 'others':



              if (this.custom_navigator.share ) {
                  this.custom_navigator.share({
                      title: 'Examtrain.NG',
                      text: decodeURI(share_text) ,
                      url: 'https://app.examtrain.ng'
                  }).then(() => {
                      console.log('Thanks for sharing!');
                  })
                      .catch(err => {
                          console.log(`Couldn't share because of`, err.message);
                      });
              }

              console.log('shareTO' , platform)
              break
      }

      this.upgradeUserQuestionsCount()

  }


    upgradeUserQuestionsCount(){
      this.localStorage.saveOtherData({max_question_count: 15,
          has_shared: true})
    }



    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalControl.dismiss({
            'dismissed': true
        });
    }



}
