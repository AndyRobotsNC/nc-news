const axios = require("axios");

const apiRequest = axios.create({
  baseURL: "https://northcoders-nc-news.herokuapp.com/api",
});

export const allArticles = () => {
  return apiRequest.get("/articles").then((data) => {
    return data;
  });
};
export const allItemsByCategory = (category_name) => {
  return apiRequest.get(`/articles?topic=${category_name}`).then((data) => {
    return data;
  });
};
export const allItemsBySort = (sort_by) => {
  return apiRequest.get(`/articles?sort_by=${sort_by}`).then((data) => {
    return data;
  });
};
export const allItemsByCategoryAndSort = (category_name, sort_by) => {
  return apiRequest
    .get(`articles?topic=${category_name}&sort_by=${sort_by}`)
    .then((data) => {
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
export const postComment = (article_id, body, username) => {
  return apiRequest
    .post(`/articles/${article_id}/comments`, { body, username })
    .then((data) => {});
};
export const deleteComment = (comment_id) => {
  return apiRequest.delete(`/comments/${comment_id}`);
};
