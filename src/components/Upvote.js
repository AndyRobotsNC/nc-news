import { useState, useContext } from "react";
import { patchUpvotes } from "../utils/api";
import { loginContext } from "../utils/Context";

const Upvote = ({ article_id, votes }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);
  const [upvotes, setUpvotes] = useState(votes);

  const handleUpvotes = () => {
    setUpvotes((currVotes) => currVotes + 1);
    patchUpvotes(article_id, 1);
  };

  return (
    <button disabled={!isLoggedIn} onClick={handleUpvotes}>
      Upvotes:{upvotes}
    </button>
  );
};
export default Upvote;
