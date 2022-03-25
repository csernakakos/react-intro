import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import ThemeSelector from "./components/ThemeSelector";
import {useTheme} from "./hooks/useTheme";
import './App.css';

function App() {

  const {mode} = useTheme();

  return (
    <div className={`App ${mode}`}>
    
    <BrowserRouter>

      <Navbar />
      <ThemeSelector />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
