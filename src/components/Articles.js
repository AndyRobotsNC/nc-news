import { useEffect, useState } from "react";
import { allArticles, allItemsByCategory } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category_name = searchParams.get("topic");

  useEffect(() => {
    if (category_name) {
      allItemsByCategory(category_name).then((itemsByCategory) => {
        setArticles(itemsByCategory.data.articles);
      });
    } else {
      allArticles().then((allData) => {
        setArticles(allData.data.articles);
      });
    }
  }, [category_name]);

  return (
    <>
      <SortBy />
      <div className="container">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
    </>
  );
};

export default Articles;
