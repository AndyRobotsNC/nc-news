import "./App.css";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topics from "./components/Topics";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginContext, usernameContext } from "./utils/Context";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <usernameContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <div className="App">
            <Header className="header" />
            <Nav />
            <div>
              <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:article_id" element={<Article />} />
                <Route path="/topics" element={<Topics />} />

                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </usernameContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
