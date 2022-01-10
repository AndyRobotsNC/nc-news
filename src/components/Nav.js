import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>Topics</li>
        <Link to="/articles">
          <li>Articles</li>
        </Link>

        <li>Users</li>
      </ul>
    </div>
  );
};
export default Nav;
