"use strict";

export const app_url = "https://toybz.github.io/quizo/";

export const get_categories = "https://opentdb.com/api_category.php";

export const get_category_question_count = function(category_id) {
  return `https://opentdb.com/api_count.php?category=${category_id}`;
};

export const get_question = function(exam_type, subject, amount) {
  return `https://questions.aloc.ng/api/q/${amount}?type=${exam_type}&subject=${subject}`;
};


