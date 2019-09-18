User Registration
Create Backend To Enter Tutorials link  for Study page
Create Exam Category Model and the many to many connections between them .i.e a subject can belong to many exams, the subject_sub_topic can also belong to or not belong to such exams.



dns1.p06.nsone.net
dns2.p06.nsone.net
dns3.p06.nsone.net
dns4.p06.nsone.net












Tutorials 
- Create the models
- Create the model methods and helper classes
- Create the routes

Models and Relationships
- ExamType
- Subjects
- Topic
- Sub Topics

ExamType (id , name,  show_in_app , deleted)
Subjects( id, name ,show_in_app , deleted)
examTypeAndSubjectRelationship(id, exam_id, subject_id , deleted, position_in_curriculum )


Topics( id, name ,show_in_app, subject_id , deleted)
examTypeAndTopicRelationship(id, exam_id, subject_id , topic_id , deleted, position_in_curriculum  )

SubTopics( id, name ,show_in_app, topic_id , deleted )
examTypeAndSubTopicRelationship(id, exam_id, subject_id , topic_id, sub_topic_id, deleted, position_in_curriculum )


If Tutorial link is empty, make show_in_app false

PAGE FLOW
_All Add/Edit/View are a component so that they can be used on other pages easily, without routing to the real page for it_

User creates Exam Type and selects subjects for this exam, (user can also click on Add Subject To quickly add a new subject)

View Exam Page, lists all exams with action buttons to edit, activate/deactivate /delete / accordion to open up the list of subjects in the exam

Subjects Accordion: shows list of all subjects, each have a button that leads to the CURRICULUM PAGE for the subject and exam



- In curriclum page the topics, sub topics can be drag for rearrangement 


 For website use beutiful animated SVG also use font on  atlassian website
 (APPLE LIKE CREATIVITY AND APPEAL)
