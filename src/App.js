import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
