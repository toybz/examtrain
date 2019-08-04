import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-study-page",
  templateUrl: "./study-page.page.html",
  styleUrls: ["./study-page.page.scss"]
})
export class StudyPagePage implements OnInit {

  customPopoverOptionsCategory: any = {
    header: 'Select Category',
    subHeader: '',
    message: ''
  };
  customPopoverOptionsExamType: any = {
    header: 'Select Exam Type',
    subHeader: '',
    message: ''
  };

  selected_category = "explore";
  selected_exam = "jamb";


  constructor() {}

  ngOnInit() {}
}
