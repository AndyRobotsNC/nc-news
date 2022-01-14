import { useState, useContext } from "react";
import { loginContext } from "../utils/checkLogin";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(loginContext);

  const [loginBox, setLoginBox] = useState("");

  const handleSubmit = (event) => {
    if (loginBox === "jessjelly") {
      setIsLoggedIn((currState) => !currState);
    } else {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setLoginBox(value);
  };

  return (
    <div>
      <h2>Enter your login details below</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="loginBox"
          type="text"
          onChange={handleChange}
          value={loginBox}
        />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default LoginPage;
