import { useEffect, useState } from "react";
import { allTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    allTopics()
      .then((allData) => {
        setTopics(allData.data.topics);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  return (
    <>
      {error ? (
        <p>There has been an error</p>
      ) : (
        <div className="container">
          {topics.map((topic) => {
            return <TopicCard topic={topic} />;
          })}
        </div>
      )}
    </>
  );
};

export default Topics;
