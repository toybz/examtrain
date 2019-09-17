import { Component, OnInit } from '@angular/core';
import {NbIconLibraries} from "@nebular/theme";

@Component({
  selector: 'ngx-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  exams: any = [
    {
      name: "Jamb",
      subjects: ['Mathematics' , 'English' , 'Physics']
    },
    {
      name: "Waec",
      subjects: ['Mathematics' , 'English' , 'Physics']
    },
    {
      name: "Neco",
      subjects: ['Mathematics' , 'English' , 'Physics']
    },
  ];

  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });


  }

  ngOnInit() {
    console.log('Exam Module')
  }

}
