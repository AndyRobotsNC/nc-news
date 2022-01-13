import { deleteComment } from "../utils/api";

const SingleComment = ({ comment }) => {
  let commentID = comment.comment_id;

  const handleDelete = () => {
    deleteComment(commentID);
  };

  return (
    <div className="single-comment">
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleComment;
