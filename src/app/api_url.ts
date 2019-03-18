"use strict";

export const get_categories = "https://opentdb.com/api_category.php";

export const get_category_question_count = function(category_id) {
  return `https://opentdb.com/api_count.php?category=${category_id}`;
};

export const get_question = function(category_id, difficulty, amount) {
  return `https://opentdb.com/api.php?amount=${amount}&category=${category_id}&difficulty=${difficulty}`;
};
