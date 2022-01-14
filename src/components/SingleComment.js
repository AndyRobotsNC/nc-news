import { deleteComment } from "../utils/api";
import { useContext } from "react";
import { usernameContext } from "../utils/Context";

const SingleComment = ({ comment }) => {
  const { username, setUsername } = useContext(usernameContext);
  let commentID = comment.comment_id;

  const handleDelete = () => {
    deleteComment(commentID);
  };

  return (
    <div className="single-comment">
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      {username === comment.author && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default SingleComment;
