import { Component, OnInit } from '@angular/core';
import { StudyService } from "../../../services/study/study.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView : 3,
   // loop: true,

  };

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
      })


  }

  showTopicsFor(subject){
    console.log(subject)
    this.selected_subject = subject
    this.study_service.getSubjectTopics(subject).subscribe(
      (topics)=>{
        this.subject_topics = topics
        console.log(this.subject_topics)
      }
    )




  }

}
