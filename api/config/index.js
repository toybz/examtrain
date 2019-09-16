module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret' ,
    app_name : "Quizo" ,
    db_name : "quizo"
};
