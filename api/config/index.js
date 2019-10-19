module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    app_name : "ExamTrain" ,
    db_name : "examTrain"

};
