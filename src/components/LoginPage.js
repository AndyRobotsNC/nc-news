import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../utils/checkLogin";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

  let navigate = useNavigate();
  const [loginBox, setLoginBox] = useState("");

  const handleSubmit = (event) => {
    if (loginBox === "jessjelly") {
      navigate("/");
      setIsLoggedIn((currState) => !currState);
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setLoginBox(value);
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
        </>
      )}
    </div>
  );
};

export default LoginPage;
