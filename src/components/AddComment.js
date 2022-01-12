import { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ article_id }) => {
  const [commentBox, setCommentBox] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, commentBox, "jessjelly");

    setCommentBox("");
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setCommentBox(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="addCommentBox"
        type="text"
        onChange={handleChange}
        value={commentBox}
      />
      <button>Add Comment</button>
    </form>
  );
};

export default AddComment;
