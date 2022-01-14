import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { loginContext, usernameContext } from "../utils/Context";

const AddComment = ({ article_id }) => {
  const [commentBox, setCommentBox] = useState("");
  const { username, setUsername } = useContext(usernameContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentBox.length > 2) {
      postComment(article_id, commentBox, username);

      setCommentBox("");
    }
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
      <button disabled={!isLoggedIn}>Add Comment</button>
    </form>
  );
};

export default AddComment;
