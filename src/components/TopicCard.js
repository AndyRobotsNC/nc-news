const TopicCard = ({ topic }) => {
  return (
    <div className="articleCard">
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </div>
  );
};

export default TopicCard;
