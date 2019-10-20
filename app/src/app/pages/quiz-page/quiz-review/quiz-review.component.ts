import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {
    ActionSheetController,
    ModalController,
    PopoverController
} from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { MemesService } from "../memes.service";
import { Observable, ReplaySubject } from "rxjs/index";
import { LocalStorageService } from "../../../services/local-storage/local-storage.service";
import { app_url } from "../../../services/urls";
import {AnswerExplanationComponent} from "../answer-explanation/answer-explanation.component";

@Component({
    selector: "app-quiz-review",
    templateUrl: "./quiz-review.component.html",
    styleUrls: ["./quiz-review.component.scss"]
})
export class QuizReviewComponent implements OnInit {
    @Input() correct_answers_count: number;
    @Input() questions: any;
    @Input() quiz_config: any;
    show_corrections = false;
    $memesUrl;
    showMemes = new ReplaySubject(1);
    review;
    whatsapp_share_url;
    app_url = app_url;
    share_text;
    constructor(
        private modalController: ModalController,
        public actionSheetController: ActionSheetController,
        public memesService: MemesService,
        public localStorage: LocalStorageService
    ) {}

    @ViewChild('videoElement') someInput: ElementRef;


    video_elem
    ngAfterViewInit() {
     this.video_elem =     this.someInput.nativeElement;
        this.video_elem.muted = true
    }


     custom_navigator: any = window.navigator;


    ngOnInit() {
        console.log("ng ini called");



      /*  const shareBtn = document.querySelector('.share_button');

        shareBtn.addEventListener('click', () => {

            console.log("share listener triggerd")


            if (this.custom_navigator.share ) {

                this.custom_navigator.share({
                    title: 'Examtrain.NG',
                    text: this.share_text,
                    url: 'https://app.examtrain.ng'
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch(err => {
                        console.log(`Couldn't share because of`, err.message);
                    });
            } else {
                var win = window.open(this.whatsapp_share_url, "_blank");

            }

        });*/







        let score_in_percent =
            (this.correct_answers_count / this.quiz_config.amount) * 100;

        console.log(score_in_percent);

        if (score_in_percent <= 30) {
            // very poorr
            this.review = "Uh Oh";
        } else if (score_in_percent <= 50) {
            // ok
            this.review = "Nice one";
        } else if (score_in_percent <= 70) {
            // average
            this.review = "That's Great";
        } else if (score_in_percent <= 100) {
            // very poorr
            this.review = "You The Champ. Great Job";
        }

        this.localStorage.getOtherData().subscribe((other_data: any) => {
            this.showMemes = other_data.show_memes;
        });

        this.$memesUrl = this.memesService.generateMemes(score_in_percent);

        this.share_text = encodeURIComponent(
            `Hi I scored ${this.correct_answers_count} out of ${this.quiz_config.amount} in a test on ExamTrain.NG. Join me to prepare for all exams with past questions and video tutorials for free`
        );

        this.whatsapp_share_url = `https://wa.me/?text=${this.share_text}`;
    }

    updateMemesSettings() {
        console.log(this.showMemes);
        this.localStorage.saveOtherData({ show_memes: this.showMemes });
    }

    dismissModal(data: {}) {
        this.modalController.dismiss(data);
    }

    async showOptions() {
        const actionSheet = await this.actionSheetController.create({
            header: "Options",
            buttons: [
                {
                    text: "Play Again",
                    role: "destructive",
                    icon: "refresh",
                    handler: () => {
                        this.dismissModal({
                            action: "reload"
                        });
                    }
                },
                {
                    text: "New Quiz",
                    icon: "play",
                    handler: () => {
                        this.dismissModal({
                            action: "new_quiz"
                        });
                    }
                },
                {
                    text: "Share",
                    icon: "share",
                    handler: () => {
                        this.share();
                    }
                },
                {
                    text: "Dashboard",
                    icon: "analytics",
                    handler: () => {
                        this.dismissModal({
                            action: "dashboard"
                        });
                    }
                },

                {
                    text: "Cancel",
                    icon: "close",
                    role: "cancel",
                    handler: () => {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        await actionSheet.present();
    }

        share() {


        if (this.custom_navigator.share ) {
            this.custom_navigator.share({
                title: 'Examtrain.NG',
                text: decodeURI(this.share_text) ,
                url: 'https://app.examtrain.ng'
            }).then(() => {
                console.log('Thanks for sharing!');
            })
                .catch(err => {
                    console.log(`Couldn't share because of`, err.message);
                });
        } else {
            var win = window.open(this.whatsapp_share_url, "_blank");

        }


    }






    showCorrections(id) {
        this.show_corrections = !this.show_corrections;

        if (this.show_corrections) {
            setTimeout(() => {
                let el = document.getElementById(id);
                console.log(el);
                el.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            let el = document.getElementById(id);
            console.log(el);
            el.scrollIntoView({ behavior: "smooth" });
        }
    }


    async showExplanation(question){
        console.log(question)
        const explanation_modal = await this.modalController.create({
            component: AnswerExplanationComponent,
            componentProps: {
                question: question
            },
            animated: true
        });

        explanation_modal.onDidDismiss().then(res => {
            console.log(res);

            if (res.data.action == "reload") {

            }
        });

        return await explanation_modal.present();

    }

}
