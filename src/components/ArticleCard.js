import { Link, useParams } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{`${article.body.slice(0, 70)}...`}</p>
      <h4>Author: {article.author}</h4>
    </div>
  );
};

export default ArticleCard;
