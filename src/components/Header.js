import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>NC-news</h1>
      <Link to="/login">
        <h3>Login Here!</h3>
      </Link>
    </div>
  );
};

export default Header;
