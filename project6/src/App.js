import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {

  // UI STRINGS:
  const signup = "Sign in";
  const login = "Log in";

  return (
    <div className="App">

      {/* ROUTES */}
      <BrowserRouter>
      <Navbar UIstrings={[signup, login]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login UIstring={login} />} />
          <Route path="/signup" element={<Signup UIstring={signup} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
