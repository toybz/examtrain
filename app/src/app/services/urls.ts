"use strict";

export const app_url = "https://app.examtrain.ng/";

export const get_categories = "https://opentdb.com/api_category.php";

export const get_category_question_count = function(category_id) {
  return `https://opentdb.com/api_count.php?category=${category_id}`;
};

export const get_question = function(exam_type, subject, amount, year='') {
  return `https://questions.aloc.ng/api/q/${amount}?type=${exam_type}&subject=${subject}&year=${year}`;
};

//export const api_url = "http://localhost:9955/";
export const api_url = "http://examtrain.us-east-1.elasticbeanstalk.com/";




export const register = `${api_url}users/`;
export const login = `${api_url}users/login/`;
export const logout = `${api_url}users/login/`;

export const save_quiz = `${api_url}quiz/history`;





