import { useState } from "react";
import { patchUpvotes } from "../utils/api";

const Upvote = ({ article_id, votes }) => {
  const [upvotes, setUpvotes] = useState(votes);

  const handleUpvotes = () => {
    setUpvotes((currVotes) => currVotes + 1);
    patchUpvotes(article_id, 1);
  };

  return <button onClick={handleUpvotes}>Upvotes:{upvotes}</button>;
};
export default Upvote;
