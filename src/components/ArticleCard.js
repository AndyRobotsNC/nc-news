import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{`${article.body.slice(0, 70)}...`}</p>
      <h4>By {article.author}</h4>
      <p>comments: {article.comment_count}</p>
      <p>votes: {article.votes}</p>
      <p>posted: {article.created_at}</p>
    </div>
  );
};

export default ArticleCard;
