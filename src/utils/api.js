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
