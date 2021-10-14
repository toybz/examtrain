import {Component, OnInit, ViewChild} from '@angular/core';
import { StudyService } from "../../../services/study/study.service";
import Swal from 'sweetalert2'
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView : 2,
   // loop: true,

  };
    @ViewChild(IonSlides) slider: IonSlides;

/*  subjects = [
    {
      name: 'english',
      title: 'English'
    } ,
    {
      name: 'mathematics',
      title: 'Mathematics'
    } ,
    {
      name: 'commerce',
      title: 'Commerce'
    } ,
    {
      name: 'accounting',
      title: 'Accounting'
    } ,
    {
      name: 'biology',
      title: 'Biology'
    } ,
    {
      name: 'physics',
      title: 'Physics'
    } ,
    {
      name: 'chemistry',
      title: 'Chemistry'
    } ,
    {
      name: 'englishlit',
      title: 'English Literature'
    } ,
    {
      name: 'government',
      title: 'Government'
    } ,
    {
      name: 'crk',
      title: 'CRK'
    } ,
    {
      name: 'geography',
      title: 'Geography'
    } ,
    {
      name: 'economics',
      title: 'Economics'
    } ,
    {
      name: 'irk',
      title: 'IRK'
    } ,
    {
      name: 'civiledu',
      title: 'Civil Education'
    } ,
    {
      name: 'insurance',
      title: 'Insurance'
    } ,
    {
      name: 'currentaffairs',
      title: 'Current Affairs'
    } ,
    {
      name: 'history',
      title: 'History'
    } ,
  ];*/

subjects = [];

  selected_subject ;
  subject_topics ;

  constructor(private study_service: StudyService) { }

  ngOnInit() {

      this.study_service.getSubjects().subscribe((subjects)=>{

        this.subjects = subjects
        this.showTopicsFor(this.subjects[0])
      })

     /* Swal.fire({
          position: 'center',
          type: 'info',
          title: 'We are constantly updating the tutorials, please always check back for updates',
          showConfirmButton: false,
          timer: 5000,
          backdrop: false,
          toast: true,
          width: '100%',
          customClass: {
              container: 'swal-toast-container-class',
              icon: 'swal-toast-icon-class',

          }

      })*/

  }

  showTopicsFor(subject){


    console.log(subject)
    this.selected_subject = subject
    this.study_service.getSubjectTopics(subject).subscribe(
      (topics)=>{
        this.subject_topics = topics
        this.subject_topics.map((topic)=>{
          topic[1].progress = parseFloat( (Math.random()).toFixed(1))
        })
        console.log(this.subject_topics)


      }
    )




  }

  //todo: refactor this
  getSubjectImage(){
   return this.study_service.getSubjectImage(this.selected_subject)
  }


    slide(direction){
        if(direction == 'next'){
            this.slider.slideNext()
        }
        else{
            this.slider.slidePrev()
        }
    }



}
