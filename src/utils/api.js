const axios = require("axios");

const apiRequest = axios.create({
  baseURL: "https://northcoders-nc-news.herokuapp.com/api",
});

export const allArticles = () => {
  return apiRequest.get("/articles").then((data) => {
    return data;
  });
};
export const allTopics = () => {
  return apiRequest.get("/topics").then((data) => {
    return data;
  });
};
export const singleArticle = (article_id) => {
  return apiRequest.get(`/articles/${article_id}`).then((data) => {
    return data.data.article;
  });
};
export const singleArticleComments = (article_id) => {
  return apiRequest.get(`/articles/${article_id}/comments`).then((data) => {
    return data.data.comments;
  });
};
export const patchUpvotes = (article_id, inc_votes) => {
  return apiRequest
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((data) => {});
};
