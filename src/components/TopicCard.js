import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <div className="articleCard">
      <Link to={`/articles?topic=${topic.slug}`}>
        <h3>{topic.slug}</h3>
      </Link>
      <p>{topic.description}</p>
    </div>
  );
};

export default TopicCard;
