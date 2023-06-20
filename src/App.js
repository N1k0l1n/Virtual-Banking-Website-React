import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/signin" Component={SigninPage} />
      </Routes>
    </Router>
  );
}

export default App;
