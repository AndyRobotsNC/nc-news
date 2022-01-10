const axios = require("axios");

const apiRequest = axios.create({
  baseURL: "https://northcoders-nc-news.herokuapp.com/api",
});

export const allArticles = () => {
  return apiRequest.get("/articles").then((data) => {
    return data;
  });
};
