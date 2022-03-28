import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();

  console.log(user);

  // UI STRINGS:
  const signup = "Sign up";
  const login = "Log in";

  return (
    <div className="App">

  {/* LOAD COMPONENT ONLY AFTER DB SENDS JSONWEBTOKEN */}
      {authIsReady && (
        <>

          <BrowserRouter>
          <Navbar UIstrings={[signup, login]} />
            <Routes>
              <Route path="/" element={<Home />} />
            
              {/* REDIRECT DEPENDING ON AUTH STATUS */}
              <Route path="/login" element={
                user
                ? <Navigate to ="/" replace />
                : <Login UIstring={login} />
              } />

              <Route path="/signup" element={
                user
                ? <Navigate to ="/" replace />
                : <Signup UIstring={signup} />
              } />
            
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
