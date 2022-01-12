import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { singleArticle, singleArticleComments } from "../utils/api";

const Article = () => {
  const [articleItem, setArticleItem] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const params = useParams();

  useEffect(() => {
    singleArticle(params.article_id).then((singleItemData) => {
      setArticleItem(singleItemData);

      if (showComments) {
        singleArticleComments(params.article_id).then((commentsData) => {
          setArticleComments(commentsData);
          console.log(commentsData);
        });
      }
    });
  }, [params, showComments]);

  const toggleComments = () => {
    setShowComments((curr) => !curr);
  };

  return (
    <>
      <div className="container">
        <div className="articleCard">
          <h1>{articleItem.title}</h1>
          <h3>By {articleItem.author}</h3>
          <p>{articleItem.body}</p>
          <button>Upvotes: {articleItem.votes}</button>
          <p>{articleItem.created_at}</p>
          {
            <button onClick={toggleComments}>
              View comments ({articleItem.comment_count})
            </button>
          }
        </div>
      </div>
      <div className="article-comments">
        {showComments &&
          articleComments.map((comment) => {
            return (
              <div className="single-comment">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Article;
