import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import Upvote from "./Upvote";
import { useParams } from "react-router-dom";
import { singleArticle, singleArticleComments } from "../utils/api";

const Article = () => {
  const [articleItem, setArticleItem] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    singleArticle(params.article_id)
      .then((singleItemData) => {
        setArticleItem(singleItemData);

        if (showComments) {
          singleArticleComments(params.article_id).then((commentsData) => {
            setArticleComments(commentsData);
          });
        }
      })
      .catch((err) => {
        setError({ err });
      });
  }, [params, showComments]);

  const toggleComments = () => {
    setShowComments((curr) => !curr);
  };

  return (
    <>
      {error ? (
        <p>There has been an error</p>
      ) : (
        <>
          <div className="container">
            <div className="articleCard">
              <h1>{articleItem.title}</h1>
              <h3>By {articleItem.author}</h3>
              <p>{articleItem.body}</p>
              {articleItem.article_id && (
                <Upvote
                  article_id={params.article_id}
                  votes={articleItem.votes}
                />
              )}

              <p>{articleItem.created_at}</p>
              <div>
                <button onClick={toggleComments}>
                  View comments ({articleItem.comment_count})
                </button>
              </div>
            </div>
          </div>

          <AddComment article_id={articleItem.article_id} />

          <div className="article-comments">
            {showComments &&
              articleComments.map((comment) => {
                return <SingleComment comment={comment} />;
              })}
          </div>
        </>
      )}
    </>
  );
};
export default Article;
