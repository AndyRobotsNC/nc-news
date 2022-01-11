import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { singleArticle } from "../utils/api";

const Article = () => {
  const [articleItem, setArticleItem] = useState({});
  const params = useParams();

  useEffect(() => {
    singleArticle(params.article_id).then((singleItemData) => {
      setArticleItem(singleItemData);
      console.log(singleItemData);
    });
  }, [params]);

  return (
    <div className="article">
      <h1>{articleItem.title}</h1>
      <h3>By {articleItem.author}</h3>
      <p>{articleItem.body}</p>
      <p>{articleItem.created_at}</p>
      <p>View comments ({articleItem.comment_count})</p>
    </div>
  );
};
export default Article;
