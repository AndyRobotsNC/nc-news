import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/topics">
          <li>Topics</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
      </ul>
    </div>
  );
};
export default Nav;
