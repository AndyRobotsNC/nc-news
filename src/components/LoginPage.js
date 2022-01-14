import { useState, useContext } from "react";
import { loginContext } from "../utils/checkLogin";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

  const [loginBox, setLoginBox] = useState("");

  const handleSubmit = (event) => {
    if (loginBox === "jessjelly") {
      setIsLoggedIn((currState) => !currState);
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setLoginBox(value);
  };
  const handleLogout = () => {
    setIsLoggedIn((currState) => !currState);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <h2>Enter your login details below</h2>
          <form onSubmit={handleSubmit}>
            <label>username: </label>
            <input
              className="loginBox"
              type="text"
              onChange={handleChange}
              value={loginBox}
            />
            <button>Login!</button>
          </form>
        </>
      ) : (
        <>
          <h2>You are already logged in!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
