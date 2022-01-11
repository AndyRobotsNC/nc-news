import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { singleArticle } from "../utils/api";

const Article = () => {
  const [articleItem, setArticleItem] = useState({});
  const params = useParams();

  useEffect(() => {
    singleArticle(params.article_id).then((singleItemData) => {
      setArticleItem(singleItemData);
    });
  }, [params]);

  return (
    <div className="articleCard">
      <h2>{articleItem.article_id}</h2>
    </div>
  );
};
export default Article;
