import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import Upvote from "./Upvote";
import { Link, useParams } from "react-router-dom";
import {
  singleArticle,
  singleArticleComments,
  patchUpvotes,
} from "../utils/api";

const Article = () => {
  const [articleItem, setArticleItem] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const [commentText, setCommentTex] = useState("View comments");

  const params = useParams();
  useEffect(() => {
    singleArticle(params.article_id).then((singleItemData) => {
      setArticleItem(singleItemData);

      if (showComments) {
        singleArticleComments(params.article_id).then((commentsData) => {
          setArticleComments(commentsData);
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
          {articleItem.article_id && (
            <Upvote article_id={params.article_id} votes={articleItem.votes} />
          )}

          <p>{articleItem.created_at}</p>
          {
            <button onClick={toggleComments}>
              View comments ({articleItem.comment_count})
            </button>
          }
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
  );
};
export default Article;
