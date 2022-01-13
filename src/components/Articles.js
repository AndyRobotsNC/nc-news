import { useEffect, useState } from "react";
import {
  allArticles,
  allItemsByCategory,
  allItemsBySort,
  allItemsByCategoryAndSort,
} from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort_by, setSort_By] = useState("");

  const category_name = searchParams.get("topic");

  useEffect(() => {
    if (category_name && sort_by) {
      allItemsByCategoryAndSort(category_name, sort_by).then(
        (itemsByCategoryAndSort) => {
          setArticles(itemsByCategoryAndSort.data.articles);
        }
      );
    } else if (sort_by) {
      allItemsBySort(sort_by).then((itemsBySort) => {
        setArticles(itemsBySort.data.articles);
      });
    } else if (category_name) {
      allItemsByCategory(category_name).then((itemsByCategory) => {
        setArticles(itemsByCategory.data.articles);
      });
    } else {
      allArticles().then((allData) => {
        setArticles(allData.data.articles);
      });
    }
  }, [category_name, sort_by]);

  return (
    <>
      <SortBy setSort_By={setSort_By} />
      <div className="container">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
    </>
  );
};

export default Articles;
