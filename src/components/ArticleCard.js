const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <h3>{article.title}</h3>
      <p>{`${article.body.slice(0, 70)}...`}</p>
      <h4>Author: {article.author}</h4>
    </div>
  );
};

export default ArticleCard;
