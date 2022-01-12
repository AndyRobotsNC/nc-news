import { useEffect, useState } from "react";
import { allTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    allTopics().then((allData) => {
      setTopics(allData.data.topics);
    });
  }, []);

  return (
    <div className="container">
      {topics.map((topic) => {
        return <TopicCard topic={topic} />;
      })}
    </div>
  );
};

export default Topics;
