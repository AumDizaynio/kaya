import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPageRender from "./components/SignInPageRender/SignInPageRender";
import SignUpPageRender from "./components/SignUpPageRender/SignUpPageRender";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPageRender />} />
          <Route path="/SignUp" element={<SignUpPageRender />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
