import { Link } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../utils/Context";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

  const handleLogout = () => {
    setIsLoggedIn((currState) => !currState);
  };

  return (
    <div className="header">
      <h1>NC-news</h1>
      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <h3>Login Here!</h3>
          </Link>
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
