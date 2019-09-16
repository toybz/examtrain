import { Injectable } from '@angular/core';
import {Study as study_data} from "../../models/study-data";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor() { }


  getSubjects(){

   return of(Object.keys(study_data)) ;

  }

  getSubjectTopics(subject){

   // let topics = [];

    return of(Object.entries(study_data[subject].topics))
  }

  getTopicsDetails(subject , topic_id){

    let  selected_topic = study_data[subject].topics[topic_id];

    let topic_name = selected_topic.topic;
    let description = selected_topic.description;
    let sub_topics = selected_topic.sub_topics;

    let response = {
      topic_name,
      description ,
      sub_topics
    }

    return of(response)





  }

}
