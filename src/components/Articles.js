import { useEffect, useState } from "react";
import { allArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    allArticles().then((allData) => {
      setArticles(allData.data.articles);
    });
  }, []);

  return (
    <div className="container">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
};

export default Articles;
