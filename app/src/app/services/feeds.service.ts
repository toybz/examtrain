import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {



   feed_item = {
        id : {
            title: '',
            image: '',
            id: 2 ,
            highlight: '',
            content: '',
            comments: [],
            views: 100
        }
   }



    feeds = {
        1: {
            title: 'JAMB 2020 Registration',
            image: '',
            id: 1 ,
            highlight: 'The Joint Admissions and Matriculation Board (JAMB) management has finally declared around December 2020 for the commencement of sales of the 2020 UTME application forms.',
            content: 'The Joint Admissions and Matriculation Board (JAMB) management has finally declared around December 2020 for the commencement of sales of the 2020 UTME application forms <br>As Jamb 2020 registration is set to begin, the Joint Admission and Matriculation board (JAMB) has announced that all candidates who wish to sit for Jamb 2020 should go and get NIN. NIN Stands for National Identification Number.\n' +
                '\n' +
                'The reason to get Jamb National Identification Number (JAMB NIN) is to ensure the fingerprint/biometric and other details of a candidate are captured to check examination Malpractice.',
            comments: [],
            views: 100
        },
        2: {
            title: 'WAEC GCE Registration 2020 Has Commenced',
            image: '',
            id: 2 ,
            highlight: ' This is to inform intending candidates for the West African Senior School Certificate Examination (WASSCE) for Private Candidates, 2020 – First Series are hereby informed that the registration will commence on',
            content: 'This is to inform intending candidates for the West African Senior School Certificate Examination (WASSCE) for Private Candidates, 2020 – First Series are hereby informed that the registration will commence on October 15th, 2019.<br>Candidates should also note that the 2020 WAEC GCE registration procedure has been designed to accommodate biometric features that will be used for validation at the examination centres.<br> ' +
                'WAEC GCE normal registration period is from Monday, October 15th, 2019 to Friday, December 31, 2019. <br>Candidates MUST conclude registration within two weeks of first access to the website during the registration period. They should ensure that their names, gender, passport photographs, dates of birth and subjects are correct. They are also to print the Admission Notiec/Photo Card as evidence of successful registration which will serve as identification during the examination. The Result Checker PIN will also be on the Photo Card. Only Digital Personal Scanner should be used for fingerprint registration.',
            comments: [],
            views: 100
        },
        3 : {
            title: 'Candidates Must Acquire NIN Before Registration-JAMB',
            image: '',
            id: 3 ,
            highlight: 'The Joint Admissions and Matriculation Board (JAMB) has advised candidates who wish to take part in the 2020 Unified Tertiary Matriculation Examination (UTME) to register with the National Identity Management Commission (NIMC) to enable them obtain the National Identification Number (NIN).',
            content: 'According to JAMB, the NIN would be compulsory for UTME registration next year and only candidates with NIN would be allowed to sit for the examination next year.<br>' +
                '<br> In view of this, all candidates desiring to register for the 2020 UTME, other JAMB processes, are urged to visit the nearest NIMC centre or its licensed agents for the NIN registration ahead of the UTME registration, if they have not done so as the board has made arrangements with NIMC for candidates who do not have the NIN to be registered at the centre by NIMC or its licensed agents.\n' +
                '<br>' +
                'The board also has disclosed that it would no longer need to capture the biometrics of candidates during UTME registration next year as the information of candidates required by the board would be uploaded from the data captured by the NIMC for registration.<br>' +
                '<br>' +
                'Commenting on this, the JAMB\'s Head of Information, Dr. Fabian Benjamin, explained that the NIN would guard against all forms of registration infractions.<br>' +
                'He mentioned that candidates would be required to present their NIN at the point of registration.',
            comments: [],
            views: 100
        },
       /* 4 : {
            title: '',
            image: '',
            id: 4 ,
            highlight: '',
            content: '',
            comments: [],
            views: 100
        },
        5 : {
    title: '',
    image: '',
    id: 5 ,
    highlight: '',
    content: '',
    comments: [],
    views: 100
}*/



    }

  constructor() { }

  getAllFeeds(){
      return this.feeds
  }

  getFeed(feed_id){
      return this.feeds[feed_id]
  }

}
