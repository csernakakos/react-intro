import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";

import './App.css';
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

import {useAuthContext} from "./hooks/useAuthContext";

function App() {

  const { user, authIsReady} = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
          <BrowserRouter>
          {user && (
              <Sidebar />
          )}        
            <div className="container">
              <Navbar />
              <Routes>
                {/* Show Dashboard or redirect to /login */}
                {user && (
                  <Route exact path="/" element={<Dashboard />}/>
                )}

                {!user && (
                  <Route exact path="/" element={<Navigate to="/login" replace />}/>
                )}

                {/* Show Create or redirect to /login */}
                {user && (
                  <Route path="/create" element={<Create />}/>
                )}

                {!user && (
                  <Route path="/create" element={<Navigate to="/login" replace />}/>
                )}

                {/* Show Project/:id or redirect to /login */}
                {user && (
                  <Route path="/project/:id" element={<Project />}/>
                )}

                {!user && (
                  <Route path="/project/:id" element={<Navigate to="/login" replace />}/>
                )}


                {/* Show Login or redirect to Dashboard */}
                {user && (
                  <Route path="/login" element={<Navigate to="/" replace />}/>
                )}

                {!user && (
                  <Route path="/login" element={<Login />}/>
                )}

                {/* Show Signup or redirect to Dashboard */}
                {user && (
                  <Route path="/signup" element={<Navigate to="/" replace />}/>
                )}

                {!user && (
                  <Route path="/signup" element={<Signup />}/>
                )}

              </Routes>
  
            </div>
            {user && <OnlineUsers />}
          </BrowserRouter>
      )}
      

    </div>
  );
}

export default App
