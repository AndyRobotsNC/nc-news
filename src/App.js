import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topics from "./components/Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header" />
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
