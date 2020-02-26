import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { StudyService } from "../../../services/study/study.service";
import { Observable } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import {ActionSheetController, LoadingController} from "@ionic/angular";
import {SafeUrlPipe} from "../../../pipes/safe-url/safe-url.pipe";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-view-tutorial',
  templateUrl: './view-tutorial.component.html',
  styleUrls: ['./view-tutorial.component.scss']
})
export class ViewTutorialComponent implements OnInit {


  subject ;
  topic ;
  page_data: Observable<any>;
  description;
  sub_topics;
  selected_sub_topic ;
  isSubscribedUser = false;
  user;


  constructor(private _location: Location, private router: Router, private route: ActivatedRoute, private study_service: StudyService , private sanitizer: DomSanitizer , public loadingController: LoadingController , public actionSheetController: ActionSheetController, private  userService: UserService) {




  }

  ngOnInit() {
    this.page_data = this.route.paramMap.pipe(
      switchMap((params: any) => {
        this.subject = params.get("subject");
        return this.study_service.getTopicsDetails(this.subject , params.get("topic_id"));

      })
    );
    this.page_data.subscribe((data)=>{

      this.topic = data.topic_name;
      this.description = data.description;
      this.sub_topics = Object.values(data.sub_topics) ;


      this.setSelectedTopic(this.sub_topics[0])


    })

  }


  setSelectedTopic(sub_topic) {

    // sub_topic.url =  this.sanitizer.bypassSecurityTrustResourceUrl(sub_topic.url);

    this.selected_sub_topic = sub_topic
    this.presentLoading()


 //   console.log('The SubTopic URL' , this.selected_sub_topic)

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...' ,
        backdropDismiss: true
    });
    await loading.present();


    document.getElementById('video_frame').onload = ()=> {
      console.log('iframe loaded')
       loading.dismiss();

      const storedUser = this.userService.getUser()
      storedUser.subscribe((user: any) => {

        this.user = user;
        this.isSubscribedUser = user.subscription && user.subscription.status || false

        if(!this.isSubscribedUser){
          this.showSubscribeActionSheet();
        }
      } )




    };

  }




  goBack(){
    this.router.navigate([
      `/tabs/study/`
    ]);

  }

  async showSubscribeActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'You can only view tutorials when subscribed',
      buttons: [
         {
        text: 'Subscribe Now',
        icon: 'share',
        handler: () => {
          console.log('subscribe clicked clicked');
          this.router.navigate(['/subscribe'])
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.goBack()

        }
      }]
    });
    await actionSheet.present();
  }


}
