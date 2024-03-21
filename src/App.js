import "./App.css";
import Header from "./components/Header/Header";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./Example";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
