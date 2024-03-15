import "./App.css";
import Header from "./components/Header/Header";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <Header/>
        <SignIn/> */}
      <SignUpPage />
    </div>
  );
}

export default App;
